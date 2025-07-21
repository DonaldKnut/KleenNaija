"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I hire a cleaner?",
    answer:
      'Click on "Book a Cleaning", choose your service type, and fill out your preferred date and time. It’s that easy.',
  },
  {
    question: "Are your cleaners background-checked?",
    answer:
      "Absolutely. All cleaners undergo identity checks, training, and are professionally vetted before onboarding.",
  },
  {
    question: "Can I book one-time or recurring cleanings?",
    answer:
      "Yes! You can schedule one-time, weekly, or monthly cleanings based on your needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve clients across Lagos and are expanding rapidly into nearby regions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1f2a40] py-24 px-6 sm:px-12 md:px-20 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#6db52c]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Answers to common questions about our cleaning services.
          </motion.p>
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#223048] border border-[#6db52c]/40 shadow-lg"
                  : "bg-[#253552] hover:bg-[#2b3f5c] border border-[#6db52c]/20"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeIndex === index
                        ? "bg-[#6db52c]/10 text-[#6db52c]"
                        : "bg-white/10 text-[#6db52c]/70"
                    }`}
                  >
                    <HelpCircle size={22} />
                  </div>
                  <span
                    className={`text-lg font-medium transition-colors ${
                      activeIndex === index
                        ? "text-white"
                        : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-all duration-300 ${
                    activeIndex === index
                      ? "rotate-180 text-[#6db52c]"
                      : "text-[#6db52c]/50"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-8 pb-6 ml-16 text-gray-300"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">
            Still unsure? Our support team is always ready.
          </p>
          <button className="px-8 py-3.5 bg-[#6db52c] hover:bg-[#5da028] text-black font-semibold rounded-xl shadow-lg hover:shadow-[#6db52c]/30 transition-all transform hover:-translate-y-0.5">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
