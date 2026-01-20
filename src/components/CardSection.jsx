"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/app/ProductCard/page";

export default function CardSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://g-low-mart-server.vercel.app/latestProducts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading latest products...</p>;
  if (products.length === 0) return <p className="text-center mt-10">No products found.</p>;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
        Latest Products
      </h2>

      <div className="grid max-w-7xl mx-auto grid-cols-1 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
