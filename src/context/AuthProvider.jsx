"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { auth, googleProvider, signInWithPopup } from "@/app/firebase/firebase.config";
import { AuthContext } from "./AuthContext.jsx";
import { useContext } from "react";

// Hardcoded mock credentials
const MOCK_USER = {
  email: "admin@glowmart.com",
  password: "Glow1234",
  displayName: "Admin GlowMart",
  photoURL: "https://i.ibb.co/9HRykrcw/ma.avif"
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // On mount, check cookie
  useEffect(() => {
    const userCookie = Cookies.get("gm_user");
    if (userCookie) setUser(JSON.parse(userCookie));
  }, []);

  // Mock Email/Password login
  const signInUser = (email, password) => {
    return new Promise((resolve, reject) => {
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        setUser(MOCK_USER);
        Cookies.set("gm_user", JSON.stringify(MOCK_USER), { expires: 1 }); // 1 day cookie
        resolve(MOCK_USER);
      } else {
        reject(new Error("Invalid email or password"));
      }
    });
  };

  // Google login
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userInfo = {
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL
      };
      setUser(userInfo);
      Cookies.set("gm_user", JSON.stringify(userInfo), { expires: 1 });
      return userInfo;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Logout
  const signOutUser = () => {
    setUser(null);
    Cookies.remove("gm_user");
    router.push("/Login");
  };

  // Protect route
  const protectRoute = (callback) => {
    if (!user) router.push("/Login");
    else callback();
  };

  return (
    <AuthContext.Provider value={{ user, signInUser, signInWithGoogle, signOutUser, protectRoute }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);