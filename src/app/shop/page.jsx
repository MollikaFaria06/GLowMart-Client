"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/page"; 

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop`) 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());

      const matchesCategory = categoryFilter
        ? product.category.toLowerCase() === categoryFilter.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchInput, categoryFilter, products]);

  if (loading)
    return <div className="mt-10 text-center text-lg">Loading products...</div>;

  return (
    <div className="p-4 mx-auto max-w-7xl">
      {/* Page Title */}
      <div className="mb-2 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#da2555] via-[#ed5f8c] to-[#f18cac]">
        All Products
      </div>
      <p className="mb-6 text-center text-sm md:text-base text-gray-700">
        Discover our curated range of skincare and cosmetic products, handpicked to enhance your daily routine.
      </p>

      {/* Search + Category Filter */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="flex w-full gap-2 md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400 text-sm md:text-base outline-none"
          />
          <button
            onClick={() => setFilteredProducts(products)}
            className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 text-sm md:text-base"
          >
            Search
          </button>
        </div>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded md:w-1/4 focus:ring-2 focus:ring-pink-400 outline-none text-sm md:text-base"
        >
          <option value="">All Categories</option>
          <option value="Skincare">Skincare</option>
          <option value="Face Mask">Face Mask</option>
          <option value="Perfume">Perfume</option>
          <option value="Nail Polish">Nail Polish</option>
          <option value="Eye Shadow">Eye Shadow</option>
          <option value="Lipsticks">Lipsticks</option>
          <option value="Foundation">Foundation</option>
          <option value="Bronzer">Bronzer</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
  <ProductCard key={product._id.toString()} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
