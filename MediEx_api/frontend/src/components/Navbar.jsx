import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/input" },
    { name: "Upload", path: "/upload" },
    { name: "Simplify", path: "/simplify" },
    { name: "Q&A", path: "/qa" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-glass backdrop-blur-md shadow-soft z-50"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <motion.h1
          className="text-xl font-bold text-primary-500"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
           MediExplain App
        </motion.h1>

        <div className="flex space-x-6">
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              <motion.span
                className={`relative font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-500"
                    : "text-gray-700 hover:text-accent-500"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
