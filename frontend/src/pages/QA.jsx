import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function QA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    setAnswer(`You asked: "${question}". This is a placeholder answer.`);
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
          Q&A Textbox
        </h1>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="w-full max-w-md h-32 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 shadow-md hover:shadow-glow transition-all mb-4"
        />
        <button
  onClick={handleAsk}
  className="bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 shadow-glow hover:shadow-xl transition-all"
>
  Ask
</button>

        {answer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md p-4 bg-white rounded-xl shadow-lg mt-6"
          >
            <h2 className="font-semibold mb-2 text-primary-700">Answer:</h2>
            <p>{answer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
