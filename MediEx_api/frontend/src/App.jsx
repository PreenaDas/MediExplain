import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Simplify from "./pages/Simplify";
import QA from "./pages/QA";

// Animated Routes Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/input"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <Dashboard />
            </motion.div>
          }
        />
        <Route
          path="/upload"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <Upload />
            </motion.div>
          }
        />
        <Route
          path="/simplify"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <Simplify />
            </motion.div>
          }
        />
        <Route
          path="/qa"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <QA />
            </motion.div>
          }
        />
        {/* Fallback */}
        <Route
          path="*"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <Login />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
