import React, { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { motion } from "framer-motion";
import { toast } from "sonner";
import usePageTitle from "../hooks/usePageTitle";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      toast.success("Login Berhasil");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  usePageTitle("Login");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen"
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-lg shadow-md w-96 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-1 text-center">
          <Label>Email</Label>
          <Input
            className="mt-2"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-1">
          <Label>Password</Label>
          <Input
            className="mt-2"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
        <Link to="/register">
          <p className="text-sm text-center mx-auto">
            Don't have any account yet?{" "}
            <span className="text-blue-600">Register Here</span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
};

export default Login;
