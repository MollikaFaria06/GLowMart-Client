"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";

export default function AddProduct() {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      unit: e.target.unit.value,
      rating: parseFloat(e.target.rating.value),
      stock: parseInt(e.target.stock.value),
      image: e.target.image.value,
      description: e.target.description.value,
      addedBy: user?.email || "anonymous",
    };

    try {
      const res = await fetch("https://grocery-project-server.vercel.app/shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      toast.success("Product added successfully!");
      console.log(data);
      e.target.reset(); // Form clear
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="px-4 py-10 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-pink-700">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Product Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Face Mask"
              className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Category</label>
            <input
              name="category"
              type="text"
              required
              placeholder=" Foundation / Skincare / Perfume" 
              className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Price & Unit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Price</label>
              <input
                name="price"
                type="number"
                min="1"
                step="0.01"
                required
                placeholder="300"
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Unit</label>
              <input
                name="unit"
                type="text"
                required
                placeholder="ml / bottle / piece / tube"
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>
          </div>

          {/* Rating & Stock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Rating</label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                required
                placeholder="4.7"
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Stock</label>
              <input
                name="stock"
                type="number"
                min="1"
                required
                placeholder="35"
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Product Image URL</label>
            <input
              name="image"
              type="url"
              required
              placeholder="https://example.com/image.png"
              className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Write product details..."
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
