"use client";

import React from "react";

const offersData = [
  {
    id: 1,
    title: "Skincare Essentials Sale",
    discount: "20% OFF",
    image: "https://i.ibb.co/G4YjwyPC/sale.avif",
    category: "Skincare",
  },
  {
    id: 2,
    title: "Makeup Must-Haves",
    discount: "Flat 15% OFF",
    image: "https://i.ibb.co/Hp1nqw0V/up.webp",
    category: "Makeup",
  },
  {
    id: 3,
    title: "Haircare Combo Deal",
    discount: "Buy 1 Get 1",
    image: "https://i.ibb.co/1J6PDKQH/hair.webp",
    category: "Haircare",
  },
];

const couponData = [
  { code: "GLO10", description: "Get 10% off on orders above ৳2000" },
  { code: "SKIN20", description: "20% off on selected skincare products" },
  { code: "MAKEUP15", description: "15% off on all makeup items" },
];

export default function OffersPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-14">

      {/* HERO BANNER */}
      <section className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src="https://i.ibb.co/4gX8DrtB/bt.avif"
          alt="GlowMart Offers"
          className="w-full h-90 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mt-20 text-white mb-2">
            GlowMart Offers & Deals
          </h1>
          <p className="text-lg text-gray-200">
            Glow more, spend less ✨
          </p>
        </div>
      </section>

      {/* FLASH DEALS */}
      <section>
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">
          Flash Beauty Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">
                  {offer.title}
                </h3>
                <p className="text-pink-500 font-bold text-lg">
                  {offer.discount}
                </p>
                <span className="text-sm text-gray-500">
                  {offer.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COUPON CODES */}
      <section className="bg-pink-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Coupon Codes
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {couponData.map((coupon, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-2xl font-bold text-pink-500">
                {coupon.code}
              </p>
              <p className="mt-2 text-gray-600">
                {coupon.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY OFFERS */}
      <section>
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">
          Category Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 text-center bg-rose-50 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Skincare
            </h3>
            <p className="font-bold text-pink-500">
              Up to 30% OFF
            </p>
          </div>

          <div className="p-6 text-center bg-purple-50 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Makeup
            </h3>
            <p className="font-bold text-pink-500">
              Flat 20% OFF
            </p>
          </div>

          <div className="p-6 text-center bg-orange-50 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              Haircare
            </h3>
            <p className="font-bold text-pink-500">
              Buy 1 Get 1 Free
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 p-10 rounded-2xl text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-3">
          Don’t Miss These Beauty Deals 💄
        </h2>
        <p className="mb-6">
          Limited-time offers on your favorite GlowMart products
        </p>
        <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-100 transition">
          Shop Now
        </button>
      </section>

    </div>
  );
}
