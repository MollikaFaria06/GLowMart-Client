"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

export default function RegisterPage() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const handleRegister = async (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    if (!displayName || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase & 6+ characters"
      );
      return;
    }

    try {
      await signInUser(email, password); // Mock registration/login
      toast.success("Account created successfully!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Account created successfully!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white mt-20 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl border border-pink-200">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-pink-500">GlowMart</h1>
          <p className="text-gray-500 mt-1">Create your account</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Your full name"
              className="px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://i.ibb.co/QFp85gyj/cos8.webp"
              className="px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="********"
              className="px-4 py-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow hover:from-pink-600 hover:to-pink-700 transition">
            Register
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-pink-200" />
          <span className="mx-3 text-gray-400 font-semibold">OR</span>
          <hr className="flex-1 border-pink-200" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-pink-500 rounded-xl text-pink-500 font-semibold hover:bg-pink-50 transition"
        >
          <FaGoogle /> Sign up with Google
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/Login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
