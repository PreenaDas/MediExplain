// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, email });
    navigate("/input"); // redirect to dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-animated bg-[length:200%_200%] animate-gradient-x">
      {/* Animated Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-glass p-10 rounded-3xl shadow-glow border border-white/20 w-full max-w-md"
      >
        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md text-center mb-8">
          Medi<span className="text-accent-400">Explain</span>
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-xl px-4 py-2 bg-white/20 text-white placeholder-white/60 
              focus:outline-none focus:ring-2 focus:ring-accent-400"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl px-4 py-2 bg-white/20 text-white placeholder-white/60 
              focus:outline-none focus:ring-2 focus:ring-accent-400"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl px-4 py-2 bg-white/20 text-white placeholder-white/60 
              focus:outline-none focus:ring-2 focus:ring-accent-400"
              placeholder="Enter your email"
            />
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 
            hover:from-accent-500 hover:to-primary-500 shadow-lg transition-all"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
