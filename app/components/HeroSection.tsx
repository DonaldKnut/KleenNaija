"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] mt-[88px] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-12 gap-8 bg-[#1f2a40] transition-all duration-500">
      {/* Left: Text */}
      <div className="max-w-lg text-center md:text-left space-y-5">
        <h1 className="text-[55px] sm:text-3xl md:text-5xl font-bold leading-snug text-white">
          Professional Cleaning Services
          <br className="hidden md:block" />
          <span className="text-[22px] text-[#e8f4e8]">
            Sparkling Clean Spaces for Your Home & Business
          </span>
        </h1>

        <p className="text-base md:text-lg text-white leading-relaxed">
          Expert cleaners for residential, commercial, and industrial needs.
          <span className="block mt-2 font-semibold text-[#6db52c]">
            Hygiene · Reliability · Excellence
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href="/book-now"
            className="px-6 py-3 bg-gradient-to-r from-[#6db52c] to-[#5da028] text-white rounded-lg font-medium text-sm hover:from-[#5da028] hover:to-[#4d8c24] transition-all duration-300 shadow-md hover:shadow-[#6db52c]/50"
          >
            Book a Cleaning
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-[#6db52c] text-[#e8f4e8] rounded-lg font-medium text-sm hover:bg-[#6db52c]/10 transition-all duration-300"
          >
            Our Services
          </a>
        </div>

        <div className="flex items-center gap-3 pt-3 justify-center md:justify-start">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="relative w-8 h-8 rounded-full border-2 border-[#6db52c] overflow-hidden"
              >
                <Image
                  src={`/client-${idx}.jpg`}
                  alt={`Happy client ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6db52c]">
            <span className="font-bold text-[#e8f4e8]">300+</span> satisfied
            clients this month
          </p>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="w-full max-w-md lg:max-w-lg relative">
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#6db52c] rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#5da028] rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10">
          <Image
            src="/e4d626d0cc6448f0ae0c65f35a1ab6b8.jpg"
            // src="/black-cleaning-service-worker-holding-basket-household-supplies-pointing-aside-apron-copy-space-pink-background-340388830.webp"
            alt="Professional cleaning team"
            width={600}
            height={600}
            className="w-full h-auto object-contain rounded-lg shadow-xl"
            priority
          />
        </div>

        <div className="absolute -bottom-4 -right-4 bg-[#97a6ce] p-3 rounded-lg shadow-md z-20 border border-[#6db52c]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#6db52c] rounded-full animate-pulse"></div>
            <p className="text-xs font-mono font-semibold text-white">
              CLEANERS AVAILABLE
            </p>
          </div>
          <p className="text-xl font-bold text-white mt-1">25+</p>
        </div>
      </div>
    </section>
  );
}
