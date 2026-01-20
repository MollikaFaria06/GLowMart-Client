"use client";

import Image from "next/image";

export default function ExtraSection() {
  return (
    <section
      className="max-w-7xl mx-auto bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{
        backgroundImage: "url('https://i.ibb.co/dsZG7DRy/bag.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent leading-snug">
            Special Offers on All GlowMart Products
          </h2>

          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            Explore our premium skincare, makeup, and beauty essentials at amazing prices! 
            Enjoy exclusive deals, free shipping on select items, and loyalty points with every purchase. 
            Grab your favorites before the offers run out!
          </p>

          <button className="mt-8 px-10 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center items-end">
          <Image
            src="https://i.ibb.co/zhLG3WCp/by.png"
            width={500}
            height={500}
            alt="GlowMart Cosmetics"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
