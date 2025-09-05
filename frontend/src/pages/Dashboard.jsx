// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const boxes = [
    { name: "File Upload", path: "/upload", gradient: "from-primary-400 to-accent-500" },
    { name: "Simplify Text", path: "/simplify", gradient: "from-accent-500 to-primary-500" },
    { name: "Q&A Textbox", path: "/qa", gradient: "from-primary-500 to-primary-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 relative overflow-hidden bg-gray-50">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500 opacity-40"
        animate={{ x: ["0%", "50%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <h1 className="text-4xl font-bold mb-12 text-primary-700 drop-shadow-lg">
        MediExplain Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {boxes.map((box) => (
          <Link key={box.name} to={box.path}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-12 rounded-2xl bg-gradient-to-r ${box.gradient} text-white font-semibold text-xl text-center cursor-pointer`}
            >
              {box.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

