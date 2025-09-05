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
    navigate("/input"); // go to Dashboard
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500 animate-gradient-x"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-500 to-primary-500 drop-shadow-lg">
          MediExplain
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 backdrop-blur-sm"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 backdrop-blur-sm"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 backdrop-blur-sm"
          />

          <button
            type="submit"
            className="mt-4 py-2 rounded-xl bg-primary-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:bg-primary-600 transition-all"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
