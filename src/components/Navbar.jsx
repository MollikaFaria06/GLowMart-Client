"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiMenu, HiX } from "react-icons/hi";
import { FaPlus, FaBox, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const isActive = (route) =>
    pathname === route
      ? "text-pink-500 font-semibold"
      : "text-gray-700 hover:text-pink-500";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="grid items-center grid-cols-3 px-4 py-3 mx-auto max-w-7xl">

        {/* LEFT → Logo + Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co.com/9HRykrcw/ma.avif"
              alt="GlowMart Logo"
              className="h-14 w-auto"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-extrabold text-gray-800">
                Glo<span className="text-pink-500">M</span>
              </h1>
              <p className="text-xs tracking-wide text-gray-500">GlowMart</p>
            </div>
          </Link>
        </div>

        {/* CENTER → Menu */}
        <div className="items-center justify-center hidden gap-6 md:flex">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/shop" className={isActive("/shop")}>Shop</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/offers" className={isActive("/offers")}>Offers</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </div>

        {/* RIGHT → Auth / Profile */}
        <div className="items-center justify-end hidden gap-4 md:flex">
          {!user ? (
            <>
              <Link
                href="/Login"
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              >
                <FaSignInAlt /> Login
              </Link>
              <Link
                href="/Register"
                className="flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50 transition"
              >
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              
              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2 ml-2"
                >
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="profile"
                    className="w-10 h-10 rounded-full border"
                  />
                  <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="font-bold">{user.displayName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      href="/AddProduct"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <FaPlus /> Add Product
                    </Link>
                  </div>
                )}
              </div>

              {/* Logout always visible */}
              <button
                onClick={signOutUser}
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              >
                <IoLogOut /> Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="justify-self-end text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-4 pb-4 bg-white md:hidden space-y-2">
          <Link href="/" className={`block py-2 ${isActive("/")}`}>Home</Link>
          <Link href="/shop" className={`block py-2 ${isActive("/shop")}`}>Shop</Link>
          <Link href="/about" className={`block py-2 ${isActive("/about")}`}>About</Link>
          <Link href="/offers" className={`block py-2 ${isActive("/offers")}`}>Offers</Link>
          <Link href="/contact" className={`block py-2 ${isActive("/contact")}`}>Contact</Link>

          {!user ? (
            <>
              <Link
                href="/Login"
                className="flex items-center gap-2 py-2 px-3 bg-pink-500 text-white rounded-md"
              >
                <FaSignInAlt /> Login
              </Link>
              <Link
                href="/Register"
                className="flex items-center gap-2 py-2 px-3 border border-pink-500 text-pink-500 rounded-md"
              >
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={signOutUser}
                className="flex items-center gap-2 py-2 px-3 bg-pink-500 text-white rounded-md"
              >
                <IoLogOut /> Logout
              </button>
              <div className="border-t pt-2">
                <Link
                  href="/AddProduct"
                  className="flex items-center gap-2 py-2 px-3 bg-pink-50 text-pink-600 rounded-md hover:bg-pink-100"
                >
                  <FaPlus /> Add Product
                </Link>
                <Link
                  href="/ManageProducts"
                  className="flex items-center gap-2 py-2 px-3 bg-pink-50 text-pink-600 rounded-md hover:bg-pink-100"
                >
                  <FaBox /> Manage Products
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
