"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, User, LogOut, Check } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { user, isLoggedIn, login, register, logout } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (mode === "login") {
      await login(email);
      setMessage("Welcome back to your mindful space.");
    } else {
      await register(name || "Kind Soul", email, password);
      setMessage("Your account has been warmly created.");
    }

    setTimeout(() => {
      router.push("/shop");
    }, 800);
  };

  if (isLoggedIn && user) {
    return (
      <div className="w-full bg-[#f8f6f0] min-h-screen py-16 sm:py-24">
        <div className="max-w-md mx-auto px-6 space-y-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#e3e8dc] text-[#2d352a] mx-auto flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6a7063]">
              Active Member
            </span>
            <h1 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521]">
              Welcome, {user.name}
            </h1>
            <p className="text-xs text-[#707669]">{user.email}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#efece4] border border-[#e3ded2] text-left text-xs space-y-3">
            <div className="flex justify-between pb-2 border-b border-[#dfd9cc]">
              <span className="text-[#6b7164]">Membership Status</span>
              <span className="font-medium text-[#2d352a]">Conscious Steward</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#dfd9cc]">
              <span className="text-[#6b7164]">Earth Offset Points</span>
              <span className="text-[#222521]">340 Leaves</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6b7164]">Default Shipping</span>
              <span className="text-[#222521]">Plastic Free Courier</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/shop"
              className="w-full py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest rounded-full hover:bg-[#1b2118] transition-colors"
            >
              Browse Catalog
            </Link>
            <button
              onClick={logout}
              className="w-full py-3 border border-[#cfc8b8] text-xs uppercase tracking-widest text-[#5d6356] hover:text-[#222521] hover:border-[#222521] rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-12 sm:py-20">
      <div className="max-w-md mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6c7265] hover:text-[#222521] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sanctuary</span>
          </Link>
        </div>

        <div className="bg-[#efece4] p-8 sm:p-10 rounded-3xl border border-[#e2dcd0] space-y-8 shadow-xs">
          <div className="text-center space-y-2">
            <h1 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521]">
              {mode === "login" ? "Welcome Back" : "Begin Your Journey"}
            </h1>
            <p className="text-xs text-[#6e7467]">
              {mode === "login"
                ? "Sign in to access saved rituals and order history"
                : "Create your personal account for curated essentials"}
            </p>
          </div>

          <div className="flex rounded-full bg-[#e4ded2] p-1 text-xs">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`flex-1 py-2 rounded-full font-medium transition-all ${
                mode === "login"
                  ? "bg-[#2d352a] text-[#f7f5f0]"
                  : "text-[#5d6356] hover:text-[#222521]"
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setMessage("");
              }}
              className={`flex-1 py-2 rounded-full font-medium transition-all ${
                mode === "register"
                  ? "bg-[#2d352a] text-[#f7f5f0]"
                  : "text-[#5d6356] hover:text-[#222521]"
              }`}
            >
              Create Account
            </button>
          </div>

          {message && (
            <div className="p-3 bg-[#e0e7da] border border-[#cbd5c3] text-[#2b3924] text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2b3924]" />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Amara Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="amara@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#63695b] mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#f8f6f0] border border-[#d6d0c1] rounded-xl px-4 py-3 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#1b2118] transition-colors"
              >
                {mode === "login" ? "Enter Sanctuary" : "Complete Registration"}
              </button>
            </div>
          </form>

          <p className="text-[11px] text-center text-[#7e8477]">
            By continuing you agree to conscious mindful principles.
          </p>
        </div>
      </div>
    </div>
  );
}
