import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Simplify() {
  const [text, setText] = useState("");
  const [simplified, setSimplified] = useState("");

  const handleSimplify = () => {
    // Dummy simplification: reverse text
    setSimplified(text.split("").reverse().join(""));
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
          Simplify Text
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full max-w-md h-32 p-3 mb-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
        />

        <button
          onClick={handleSimplify}
          className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 shadow-lg hover:shadow-xl transition-all mb-4"
        >
          Simplify
        </button>

        {simplified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg mt-4"
          >
            <h2 className="font-semibold mb-2 text-primary-700">
              Simplified Text:
            </h2>
            <p>{simplified}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
