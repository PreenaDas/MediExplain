import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/input" },
    { name: "Upload", path: "/upload" },
    { name: "Simplify", path: "/simplify" },
    { name: "Q&A", path: "/qa" },
  ];

  return (
    <motion.nav
      className="px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 rounded-b-2xl"
      style={{
        background: "linear-gradient(90deg, #5c85ff, #a366ff, #3366ff)",
        backgroundSize: "300% 300%",
      }}
      animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      {/* Animated Gradient Brand */}
      <motion.div
        className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-accent-400"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        MediExplain
      </motion.div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={link.path}
              className="hover:text-accent-400 transition-colors font-semibold text-white"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}


