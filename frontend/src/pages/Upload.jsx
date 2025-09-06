import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Select a file first!");
    alert(`File "${file.name}" uploaded!`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-primary-700 drop-shadow-lg">
          File Upload
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input
            type="file"
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 shadow-md hover:shadow-glow transition-all"
          />
          <button
            type="submit"
            className="bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 shadow-glow hover:shadow-xl transition-all"
          >
            Upload
          </button>
        </form>
      </div>
    </motion.div>
  );
}
