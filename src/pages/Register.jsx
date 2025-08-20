import React, { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import usePageTitle from "../hooks/usePageTitle";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.username, form.email, form.password);
      toast.success("Registrasi Berhasil");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Register gagal");
    }
  };

  usePageTitle("Register");

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
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-1">
          <Label>Full Name</Label>
          <Input
            className="mt-2"
            type="text"
            placeholder="John Doe"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>

        <div className="space-y-1">
          <Label>Email</Label>
          <Input
            className="mt-2"
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
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
        <Link to="/login">
          <p className="text-sm text-center mx-auto">
            Already have any account yet?{" "}
            <span className="text-blue-600">Login Here</span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
};

export default Register;
