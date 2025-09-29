// controllers/reportController.js
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import Report from "../models/Report.js";
import dotenv from "dotenv";

dotenv.config();

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";

/**
 * POST /api/reports/simplify
 * Expects multipart/form-data with key "file" and optionally "lang"
 */
export const uploadReport = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = req.file.path; // multer stored file here
    const lang = req.body.lang || "en";

    // Build form-data to forward to FastAPI
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));
    form.append("lang", lang);

    // Post to FastAPI process-report
    const response = await axios.post(`${FASTAPI_URL}/process-report`, form, {
      headers: {
        ...form.getHeaders(),
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const data = response.data || {};
    const simplifiedText = data.simplified_text || data.simplifiedText || "";
    const originalText = data.raw_text || data.rawText || "";

    // Save to MongoDB
    const report = new Report({
      filename: req.file.originalname,
      originalText,
      simplifiedText,
      lang,
    });
    await report.save();

    // Delete the local uploaded file (cleanup)
    try {
      fs.unlinkSync(filePath);
    } catch (e) {
      console.warn("Could not delete temp file:", filePath, e.message);
    }

    res.json({
      message: "Simplified successfully",
      id: report._id,
      filename: report.filename,
      simplifiedText,
      originalText,
    });
  } catch (err) {
    console.error("uploadReport error:", err.message || err);
    // Try to cleanup uploaded file
    if (req.file && req.file.path) {
      try { fs.unlinkSync(req.file.path); } catch (e) {}
    }
    res.status(500).json({ error: err.response?.data || err.message || "Server error" });
  }
};

/**
 * POST /api/reports/ask
 * Expects JSON: { simplified_text, question, lang }
 */
export const askQuestion = async (req, res) => {
  try {
    const { simplified_text, question, lang } = req.body;
    if (!simplified_text || !question) {
      return res.status(400).json({ error: "missing simplified_text or question" });
    }

    // Forward to FastAPI ask-question (expects JSON)
    const response = await axios.post(`${FASTAPI_URL}/ask-question`, {
      simplified_text,
      question,
      lang: lang || "en",
    }, {
      headers: { "Content-Type": "application/json" },
    });

    const answer = response.data?.answer || response.data;
    res.json({ answer });
  } catch (err) {
    console.error("askQuestion error:", err.message || err);
    res.status(500).json({ error: err.response?.data || err.message || "Server error" });
  }
};

/**
 * GET /api/reports
 * Return saved reports history
 */
export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    console.error("getReports error:", err);
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};
