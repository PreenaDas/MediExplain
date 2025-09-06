import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Simplify() {
  const [text, setText] = useState("");
  const [simplified, setSimplified] = useState("");

  const handleSimplify = () => {
    setSimplified(text.split("").reverse().join("")); // dummy simplification
  };

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-300 relative overflow-hidden"
      {...pageTransition}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-primary-700">Simplify Text</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full max-w-md h-32 border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-md hover:shadow-glow transition-all"
        />

        <button
          onClick={handleSimplify}
          className="bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 shadow-glow hover:shadow-xl transition-all mb-4"
        >
          Simplify
        </button>

        {simplified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md p-4 bg-white rounded-lg shadow-glow mt-4"
          >
            <h2 className="font-semibold mb-2 text-primary-700">Simplified Text:</h2>
            <p>{simplified}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
