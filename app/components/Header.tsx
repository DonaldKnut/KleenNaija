"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Home, Brush, Info, Phone } from "lucide-react";
import Image from "next/image";

// Navigation links configuration
const navigationLinks = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Services", href: "/services", icon: <Brush size={18} /> },
  { name: "About Us", href: "/about-us", icon: <Info size={18} /> },
  { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#1f2a40]/90 shadow-xl border-b border-white/10"
          : "bg-[#1f2a40]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center w-[120px] h-[80px] relative"
        >
          <Image
            src="/KleenNaija.png"
            alt="Kleen Naija Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-white">
            {navigationLinks.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative group font-medium hover:text-[#6db52c] transition-colors ${
                  pathname === href ? "text-[#6db52c]" : ""
                }`}
              >
                <span>{name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#6db52c] transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="ml-6">
            <Link
              href="/get-quote"
              className="px-6 py-2 bg-gradient-to-r from-[#6db52c] to-[#5da028] text-black rounded-lg font-semibold text-sm shadow-md hover:from-[#5da028] hover:to-[#4d8c24] transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={28} className="text-[#6db52c]" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1f2a40] to-gray-900/95 backdrop-blur-xl py-6 px-6 space-y-6">
          {navigationLinks.map(({ name, href, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-4 text-white hover:text-[#6db52c] text-lg transition ${
                pathname === href ? "text-[#6db52c]" : ""
              }`}
            >
              <span className="text-[#6db52c]">{icon}</span>
              <span className="font-medium">{name}</span>
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-white/10">
            <Link
              href="/get-quote"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-[#6db52c] to-[#5da028] text-black rounded-lg font-semibold text-base shadow-lg hover:from-[#5da028] hover:to-[#4d8c24] transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
