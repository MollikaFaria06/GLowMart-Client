"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    _id,
    name = "No Name",
    category = "Unknown",
    price = "-",
    unit = "",
    rating = 0,
    stock = 0,
    image = "/placeholder.png",
  } = product;

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden bg-white">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">
          Category: <span className="font-semibold text-pink-500">{category}</span>
        </p>
        <p className="text-sm text-gray-500">
          Stock: <span className="font-bold text-green-700">{stock}</span> available
        </p>
        <p className="text-lg font-bold text-gray-900">
          <span className="font-light text-gray-600">Price: </span>
          {price} <span className="text-sm text-gray-500">/{unit}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.floor(rating) }).map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">★</span>
          ))}
          <span className="font-bold text-gray-700">{rating}</span>
        </div>

        {/* View Details Button */}
        <Link
          href={`/shop/${_id}`}
          className="block mt-3 bg-pink-500 text-white text-center py-2 rounded-lg hover:bg-pink-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
