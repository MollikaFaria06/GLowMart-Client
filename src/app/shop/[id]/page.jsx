"use client";

import { useEffect, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoMdPricetags } from "react-icons/io";
import { AuthContext } from "@/context/AuthContext";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useContext(AuthContext); // Auth state

  const [product, setProduct] = useState(null);
  const [loadingProduct, setLoadingProduct] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      toast.warning("You must log in to view product details!");
      router.push("/Login");
    }
  }, [user, router]);

  // Fetch product by ID
  useEffect(() => {
    if (!user) return null; // Only fetch if logged in

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoadingProduct(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load product details!");
        setLoadingProduct(false);
      });
  }, [id, user]);

  if (!user) {
    return (
      <div className="mt-10 text-center text-red-500 font-semibold">
        Redirecting to login...
      </div>
    );
  }

  if (loadingProduct) {
    return (
      <div className="mt-10 text-lg font-semibold text-center">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mt-10 text-center text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl p-6 mx-auto my-8">
      <div className="overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-2xl">
        <div className="flex flex-col gap-8 p-6 md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full rounded-xl"
            />
          </div>

          {/* Product Details */}
          <div className="w-full space-y-4 md:w-1/2">
            <h1 className="text-3xl font-bold text-pink-700">{product.name}</h1>
            <div className="my-3 border-t border-gray-300"></div>

            <h2 className="mb-2 text-xl font-semibold">Description:</h2>
            <p className="text-gray-600">{product.description || "No description available."}</p>

            <div className="my-3 border-t border-gray-300"></div>

            <p>
              <span className="font-semibold">Category:</span>
              <span className="text-pink-500"> {product.category}</span>
            </p>

            <p>
              <span className="font-semibold">Unit:</span>
              <span className="text-orange-400">{product.unit}</span>
            </p>

            <p>
              <span className="font-semibold">Stock:</span> {product.stock}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 font-bold text-gray-700">
              <p className="flex items-center gap-1">
                <IoMdPricetags /> Price: <span className="text-[#4895ef]">${product.price}</span>
              </p>
              <p>⭐⭐⭐⭐⭐ {product.rating}</p>
            </div>

            {/* Back Button */}
            <div className="mt-6">
              <button
                onClick={() => router.push("/shop")}
                className="w-full py-2 border bg-pink-600 rounded-full hover:bg-pink-500 text-white font-semibold"
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
