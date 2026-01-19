"use client";

import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Skincare Routine for Glowing Skin",
    date: "Nov 18, 2025",
    link: "https://www.healthline.com/health/beauty-skin-care",
    image: "https://i.ibb.co.com/zgDXrVg/rot.jpg",
  },
  {
    id: 2,
    title: "Top Makeup Trends You Should Try",
    date: "Oct 30, 2025",
    link: "https://www.allure.com/makeup",
    image: "https://i.ibb.co.com/RpydJ7Hq/mak.webp",
  },
  {
    id: 3,
    title: "How to Choose the Right Beauty Products",
    date: "Sep 20, 2025",
    link: "https://www.cosmopolitan.com/style-beauty/",
    image: "https://i.ibb.co.com/GftNwMnP/tt.jpg",
  },
];

const teamMembers = [
  {
    name: "Adithi Akter",
    role: "Founder & Creative Director",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rafiq Ahmed",
    role: "Operations Manager",
    image: "https://i.pravatar.cc/100?img=60",
  },
  {
    name: "Sadia Islam",
    role: "Brand & Marketing Lead",
    image: "https://i.pravatar.cc/100?img=38",
  },
  {
    name: "Tanvir Hasan",
    role: "Product Specialist",
    image: "https://i.pravatar.cc/100?img=51",
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16">

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 
        bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 
        bg-clip-text text-transparent">
          About GloM – GlowMart
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          GlowMart (GloM) is your one-stop destination for premium beauty,
          skincare, and makeup products. We bring authentic brands, 
          expert-curated collections, and a seamless shopping experience.
        </p>

        <img
          src="https://i.ibb.co.com/wrbNvMtR/lov.jpg"
          alt="GlowMart Beauty"
          className="w-full max-w-3xl mx-auto mt-10 rounded-xl shadow-lg"
        />
      </section>

      {/* VISION & MISSION */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-pink-50 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To empower everyone to feel confident and beautiful by providing
            trusted beauty products that enhance natural glow.
          </p>
        </div>

        <div className="p-6 bg-pink-50 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            We aim to deliver high-quality, authentic beauty products with
            transparency, fast delivery, and customer-first service.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-pink-500">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-pink-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-700">
              100% genuine beauty products from trusted brands.
            </p>
          </div>

          <div className="p-6 bg-pink-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Confidence</h3>
            <p className="text-gray-700">
              Beauty that empowers confidence in every individual.
            </p>
          </div>

          <div className="p-6 bg-pink-200 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">
              Curated collections inspired by global beauty trends.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Beauty Tips & Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-pink-500">
          Meet the GlowMart Team
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-50 rounded-xl p-12 text-center shadow">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Discover Your Glow with GloM
        </h2>
        <p className="text-gray-700 mb-6">
          Shop premium skincare and makeup products designed to enhance your beauty.
        </p>
        <button className="px-8 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition">
          Shop Now
        </button>
      </section>

    </div>
  );
}
