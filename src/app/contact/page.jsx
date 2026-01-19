"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-14">

      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
        Contact GlowMart
      </h1>

      {/* CONTACT INFO + MAP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT → INFO */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get in Touch ✨
          </h2>

          <p className="text-gray-600">
            Have questions about skincare, makeup, or your GlowMart order?
            We’re here to help you glow with confidence.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              Banani, Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              +880 1306518217
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              support@glowmart.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT → MAP */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="GlowMart Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8855294158046!2d90.3692065149816!3d23.780887084592764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a4b9f9e2fb%3A0x8e72c2e3c7e1c7e7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Send Us a Message 💌
        </h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}
