"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-5 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm" : "bg-transparent"
      }`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="font-bold text-lg tracking-tight text-black flex items-center">
            PULSE<span className="text-neutral-300 mx-1">/</span>AI
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[12px] font-semibold text-neutral-500 uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="#features" className="hover:text-black transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-black transition-colors">Process</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-black transition-colors">Logout</button>
          ) : (
            <Link href="/login" className="px-6 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-widest text-[10px] font-bold">
              Enter App
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}