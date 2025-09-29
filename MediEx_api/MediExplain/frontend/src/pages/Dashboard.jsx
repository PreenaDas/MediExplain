import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const boxes = [
    { name: "File Upload", path: "/upload", gradient: "from-primary-400 to-accent-500" },
    { name: "Simplify Text", path: "/simplify", gradient: "from-primary-400 to-primary-500" },
    { name: "Q&A Textbox", path: "/qa", gradient: "from-accent-500 to-primary-500" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden p-6">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-animated opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <h1 className="text-4xl font-bold mb-8 text-primary-700 drop-shadow-lg text-center">
        MediExplain Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {boxes.map((box) => (
          <Link key={box.name} to={box.path}>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              className={`p-10 rounded-2xl bg-gradient-to-r ${box.gradient} text-white text-center font-semibold text-xl shadow-glow hover:shadow-xl cursor-pointer transition-all`}
            >
              {box.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
