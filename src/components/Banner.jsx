"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
      >
        {/* ===== Slide 1 ===== */}
        <SwiperSlide className="h-full">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-start px-6 md:px-40"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Y48HDW5X/cos9.jpg')",
            }}
          >
            <div className="bg-white px-10 py-16 rounded shadow-lg max-w-lg text-center">
              <p className="text-sm text-gray-500">
                Premium Beauty Collection
              </p>
              <h2 className="text-4xl font-bold text-pink-500 mb-3">
                Glow With Confidence
              </h2>
              <p className="mb-5 text-gray-600">
                Discover high-quality skincare & makeup products for your daily
                glow.
              </p>
              <a
                href="/items"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2 ===== */}
        <SwiperSlide className="h-full">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center px-6 md:px-40"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/WNmypBz9/cos10.jpg')",
            }}
          >
            <div className="bg-white px-16 py-16 text-center border-4 border-pink-400 shadow-xl">
              <h2 className="text-4xl font-bold text-pink-600 mb-3">
                Makeup Essentials
              </h2>
              <p className="text-gray-700 mb-3">
                Natural • Long-lasting • Skin-friendly
              </p>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Flat 40% OFF
              </h3>
              <a
                href="/items"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3 ===== */}
        <SwiperSlide className="h-full">
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-end px-6 md:px-40"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/QFp85gyj/cos8.webp')",
            }}
          >
            <div className="bg-white px-16 py-14 max-w-xl shadow-lg text-center">
              <p className="text-xl text-gray-600">
                Skincare That Loves You
              </p>

              <h2 className="text-5xl font-bold text-pink-500 my-4">
                GlowMart Beauty
              </h2>

              <p className="text-2xl text-gray-800 mb-6">
                Save up to 30% Today
              </p>

              <a
                href="/items"
                className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition"
              >
                Shop Beauty
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Custom Navigation Buttons ===== */}
        <div className="swiper-button-prev-custom bg-pink-500 absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
          <span className="text-white text-2xl">‹</span>
        </div>

        <div className="swiper-button-next-custom bg-pink-500 absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
          <span className="text-white text-2xl">›</span>
        </div>
      </Swiper>
    </div>
  );
}
