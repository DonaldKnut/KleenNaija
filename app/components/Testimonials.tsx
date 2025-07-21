"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Chinaza E.",
    role: "CEO, Naija Bites",
    quote:
      "Booking a cleaner for our Lagos restaurant was fast and efficient. They arrived early, cleaned thoroughly, and were extremely polite.",
    photo: "/premium_photo-1683140621573-233422bfc7f1.jpeg",
  },
  {
    name: "Bamidele T.",
    role: "Real Estate Developer",
    quote:
      "Post-construction cleaning has always been a pain, but Kleen Naija made it stress-free. Highly recommended.",
    photo: "/istockphoto-2135643653-612x612.jpg",
  },
  {
    name: "Lola O.",
    role: "Fashion Stylist",
    quote:
      "I love that I can schedule deep cleaning sessions before big shoots. The team is detailed and always on time!",
    photo: "/74fc5f9c73880ff75b301babec974cf4.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrevious = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 7000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-[#1f2a40] py-24 px-6 sm:px-12 md:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          What Our <span className="text-[#6db52c]">Clients Say</span>
        </h2>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: direction === "right" ? 100 : -100,
                scale: 0.95,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: direction === "right" ? -100 : 100,
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                duration: 0.6,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full bg-gradient-to-br from-[#24304e] to-[#1f2a40] border border-[#6db52c]/20 p-10 rounded-3xl shadow-xl shadow-[#6db52c]/10 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 rounded-full border-4 border-[#6db52c] overflow-hidden shadow-md shadow-[#6db52c]/20">
                    <Image
                      src={current.photo}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <Quote className="text-[#6db52c] w-6 h-6 mx-auto md:mx-0" />
                    <p className="text-lg leading-relaxed italic text-[#e8f4e8]">
                      “{current.quote}”
                    </p>
                    <div>
                      <p className="font-semibold text-[#6db52c] text-xl">
                        {current.name}
                      </p>
                      <p className="text-sm text-gray-300">{current.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#6db52c] hover:bg-[#5da028] text-black shadow-md z-10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#6db52c] hover:bg-[#5da028] text-black shadow-md z-10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? "right" : "left");
                setIndex(i);
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-[#6db52c] scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
