// routes/reportRoutes.js
import express from "express";
import multer from "multer";
import { uploadReport, askQuestion, getReports } from "../controllers/reportController.js";

const router = express.Router();

// Multer config: store files in 'uploads/' temporarily
const upload = multer({ dest: "uploads/" });

// POST /api/reports/simplify  (file upload)
router.post("/simplify", upload.single("file"), uploadReport);

// POST /api/reports/ask  (JSON body)
router.post("/ask", askQuestion);

// GET /api/reports  (history)
router.get("/", getReports);

export default router;
