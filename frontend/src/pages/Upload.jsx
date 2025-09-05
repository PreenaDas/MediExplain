import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first!");
    alert(`File "${file.name}" uploaded!`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          File Upload
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center w-full max-w-md"
        >
          <input
            type="file"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          />

          <button
            type="submit"
            className="w-full bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 shadow-lg hover:shadow-xl transition-all"
          >
            Upload
          </button>
        </form>
      </div>
    </motion.div>
  );
}
