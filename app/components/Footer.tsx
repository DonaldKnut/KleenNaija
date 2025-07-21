"use client";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  HelpCircle,
  MessageSquare,
  Shield,
  FileText,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function PremiumFooter() {
  const categories = [
    {
      title: "Services",
      links: [
        { name: "Private Cleaning", href: "/services/private" },
        { name: "Office Cleaning", href: "/services/corporate" },
        { name: "Post-Construction", href: "/services/logistics" },
        { name: "Event Support", href: "/services/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partnerships", href: "/partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety", href: "/safety" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Cleaning Guide", href: "/handbook" },
        { name: "Community", href: "/community" },
        { name: "FAQs", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1f2a40] text-white pt-16 pb-8 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo and Social */}
          <div className="lg:col-span-2">
            <Image
              src="/KleenNaija.png"
              alt="Kleen Naija Logo"
              width={220}
              height={220}
            />
            <p className="text-gray-300 mb-6">
              Connecting you with verified cleaning professionals across Lagos
              since 2023.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 bg-[#6db52c] rounded-full hover:bg-[#5da028] transition"
                  >
                    <Icon className="text-black hover:text-white" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Category Links */}
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#6db52c] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#6db52c]/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-gray-300 text-sm">
              © 2023 KleenNaija Ltd.
            </span>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-[#6db52c]" />
              <span className="text-gray-300 text-sm">English</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">₦ NGN</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Safety", icon: Shield },
              { label: "Terms", icon: FileText },
              { label: "Help", icon: HelpCircle },
              { label: "Contact", icon: MessageSquare },
              { label: "Donate", icon: Heart },
            ].map(({ label, icon: Icon }, i) => (
              <Link
                key={i}
                href="#"
                className="flex items-center text-gray-300 hover:text-[#6db52c] text-sm"
              >
                <Icon className="h-4 w-4 mr-1 text-[#6db52c]" /> {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center mt-8 space-x-6 flex-wrap gap-4">
          {[
            "✓ Verified Cleaners",
            "🔒 Secure Payments",
            "⭐ 4.9/5 Ratings",
          ].map((badge, idx) => (
            <div
              key={idx}
              className="bg-[#6db52c] px-4 py-2 rounded-lg flex items-center shadow-md"
            >
              <span className="text-black text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
