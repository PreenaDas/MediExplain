// server.js

// Core imports
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Initialize dotenv to use environment variables from .env
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(fileUpload({ createParentPath: true })); // Handle file uploads

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is up and running!");
});

// File upload route
app.post("/upload", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    // Assuming file input field name is 'file'
    const uploadedFile = req.files.file;
    const uploadPath = path.join(__dirname, "uploads", uploadedFile.name);

    // Move file to the uploads folder
    await uploadedFile.mv(uploadPath);

    res.json({
      message: "File uploaded successfully!",
      fileName: uploadedFile.name,
      filePath: uploadPath,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
