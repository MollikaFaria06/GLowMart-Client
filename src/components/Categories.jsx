"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// 💄 Cosmetics categories
const categories = [
  { title: "Lipsticks", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7l84UzKz_HfMcmiXGclj8KCPjcyZXkTsaA&s" },
  { title: "Foundation", img: "https://media.glamourmagazine.co.uk/photos/66993c696b5ffd5cce70f4a4/16:9/w_1280,c_limit/FOUNDATIONS%20BEST%20180724%20%201default.jpg" },
  { title: "Skincare", img: "https://gotoskincare.com/cdn/shop/articles/0723_GT_Blog_MeccaImage.jpg?v=1688608892&width=1024" },
  { title: "Eye Shadow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlLOyUEVL6MzjUu9vEFbqUDAwsPmCxwhXig&s" },
  { title: "Nail Polish", img: "https://www.thetease.com/wp-content/uploads/2022/06/professional_nail_brands.jpg" },
  { title: "Bronzer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tcSzUH__KCUc-25LaeRMHF9g3ChbMnEukg&s" },
  { title: "Face Mask", img: "https://ae01.alicdn.com/kf/S1601a0a434c643b0a33efa2437bc870eE.jpg_640x640Q90.jpg_.webp" },
  { title: "Perfume", img: "https://media.glamourmagazine.co.uk/photos/67d844ed710cfc0baa986b26/16:9/w_1920,h_1080,c_limit/BEST%20PERFUMES%20FOR%20WOMEN%20170325%20MAIN.jpg" }
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent text-4xl font-bold text-center mb-8">Popular Categories</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 }
        }}
        className="pb-10"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className="border border-pink-300 rounded-xl p-4 shadow hover:shadow-lg transition bg-white text-center">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-28 object-contain mx-auto"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {cat.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
