import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Simplify from "./pages/Simplify";
import QA from "./pages/QA";

// Animated Routes Wrapper
export default function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/input"
          element={
            <motion.div {...pageTransition}>
              <Dashboard />
            </motion.div>
          }
        />
        <Route
          path="/upload"
          element={
            <motion.div {...pageTransition}>
              <Upload />
            </motion.div>
          }
        />
        <Route
          path="/simplify"
          element={
            <motion.div {...pageTransition}>
              <Simplify />
            </motion.div>
          }
        />
        <Route
          path="/qa"
          element={
            <motion.div {...pageTransition}>
              <QA />
            </motion.div>
          }
        />
        {/* Fallback */}
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <Login />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Main App
export function App() {
  return <AnimatedRoutes />;
}

