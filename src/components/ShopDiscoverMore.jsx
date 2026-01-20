"use client";

import Image from "next/image";

export default function ShopDiscoverMore() {
  const perks = [
    {
      title: "Earn Loyalty Points",
      desc: "The more you shop, the more you earn – redeem points for discounts, free shipping, and exclusive beauty offers.",
      img: "https://i.ibb.co/tTvzyLCD/pot.jpg",
    },
    {
      title: "Daily Deals",
      desc: "Get your favorite cosmetics at amazing prices! Don’t miss our limited-time daily deals.",
      img: "https://i.ibb.co/chMXdHLy/dusto.jpg",
    },
    {
      title: "Premium Care",
      desc: "Need help with your order or have questions? Our premium support team is here to assist you anytime.",
      img: "https://i.ibb.co/F4RV6rQR/care.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      {/* Section Title */}
      <h2 className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent text-4xl font-bold text-center mb-10">
        Shop Smart, Shine More
         </h2>


      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perks.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            {/* TEXT */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-pink-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>

            {/* IMAGE */}
            <div className="w-full h-60 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
