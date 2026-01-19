"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const topProducts = [
  {
    id: 1,
    name: "Glow Serum",
    price: "$25",
    img: "https://i.ibb.co.com/XrZ2g17x/serum.jpg",
  },
  {
    id: 2,
    name: "Matte Lipstick",
    price: "$15",
    img: "https://i.ibb.co.com/7xL9RJ74/matte.jpg",
  },
  {
    id: 3,
    name: "Hydrating Cream",
    price: "$30",
    img: "https://i.ibb.co.com/m5dRbsL6/Hydrating-Cream.webp",
  },
  {
    id: 4,
    name: "Face Primer",
    price: "$20",
    img: "https://i.ibb.co.com/twPzZZTX/pime.jpg",
  },
  {
    id: 5,
    name: "Highlighter Kit",
    price: "$18",
    img: "https://i.ibb.co.com/bj8XKp3Y/kitt.jpg",
  },
];

export default function TopSellingCarousel() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent text-center mb-10">
        Top Selling Products
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {topProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all text-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-700 font-bold">{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
