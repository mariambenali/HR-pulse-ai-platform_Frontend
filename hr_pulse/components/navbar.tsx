"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Vérifier si user est connecté
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
        <span className="font-bold tracking-tight text-indigo-900 uppercase">
          HR-Pulse
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
        
        <Link 
          href="/" 
          className="hover:text-indigo-600 transition"
        >
          HOME
        </Link>

        <Link 
          href="/about" 
          className="hover:text-indigo-600 transition"
        >
          ABOUT
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            LOGOUT
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-1 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
          >
            LOGIN
          </Link>
        )}

      </div>
    </nav>
  );
}