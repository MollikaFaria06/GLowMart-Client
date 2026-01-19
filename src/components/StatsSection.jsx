"use client";

import { FaUsers, FaMoneyBillWave, FaShoppingBasket, FaHeart } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      number: "50+ Stores",
      text: "across Bangladesh",
      icon: <FaShoppingBasket className="text-pink-500 text-5xl" />,
    },
    {
      number: "10M+ Orders",
      text: "delivered to happy customers",
      icon: <FaUsers className="text-pink-500 text-5xl" />,
    },
    {
      number: "200K+ Families",
      text: "trust GlowMart products",
      icon: <FaHeart className="text-pink-500 text-5xl" />,
    },
    {
      number: "500M+ BDT",
      text: "saved by our customers",
      icon: <FaMoneyBillWave className="text-pink-500 text-5xl" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 
                     bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 
                     bg-clip-text text-transparent">
        Our Statistics
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF0F5] p-6 rounded-2xl shadow-md flex flex-col items-center gap-4 text-center"
          >
            {/* ICON */}
            <div>{item.icon}</div>

            {/* NUMBER / HEADING */}
            <h3 className="text-2xl font-bold text-gray-800">{item.number}</h3>

            {/* SUBTEXT */}
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
