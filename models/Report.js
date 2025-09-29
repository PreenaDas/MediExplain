// const mongoose = require("mongoose");

// const reportSchema = new mongoose.Schema({
//   originalText: { type: String, required: true },
//   simplifiedText: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Report", reportSchema);
// models/Report.js
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  filename: { type: String },
  originalText: { type: String, default: "" },
  simplifiedText: { type: String, default: "" },
  lang: { type: String, default: "en" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Report", reportSchema);
