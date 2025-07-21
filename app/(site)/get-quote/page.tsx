"use client";
import { FormEvent, useState } from "react";
import { Home, Building, Sparkles, CheckCircle, XCircle } from "lucide-react";

export default function GetQuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white" id="get-quote">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a40] mb-3">
            Get Your Custom Quote
          </h2>
          <div className="w-20 h-1 bg-[#6db52c] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete this form and we'll provide a tailored cleaning solution
            for your needs
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-8 bg-[#e8f4e8] rounded-lg">
            <CheckCircle className="w-16 h-16 text-[#6db52c] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1f2a40] mb-2">
              Request Received!
            </h3>
            <p className="text-gray-600 mb-6">
              Our team will contact you within 24 hours with your custom quote.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-[#6db52c] text-white rounded-lg hover:bg-[#5da028] transition"
            >
              Submit Another Request
            </button>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1f2a40] mb-2">
              Submission Failed
            </h3>
            <p className="text-gray-600 mb-6">
              Please try again or contact us directly at hello@cleaners.com
            </p>
            <button
              onClick={() => setError(false)}
              className="px-6 py-2 bg-[#6db52c] text-white rounded-lg hover:bg-[#5da028] transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Service Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#6db52c]">
                    <Home className="text-[#6db52c]" />
                    <span>Residential</span>
                    <input
                      type="radio"
                      name="serviceType"
                      value="residential"
                      className="ml-auto"
                      defaultChecked
                    />
                  </label>
                  <label className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-[#6db52c]">
                    <Building className="text-[#6db52c]" />
                    <span>Commercial</span>
                    <input
                      type="radio"
                      name="serviceType"
                      value="commercial"
                      className="ml-auto"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Cleaning Frequency
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#6db52c] focus:border-[#6db52c]">
                  <option>One-time cleaning</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#6db52c] focus:border-[#6db52c]"
                  placeholder="Any specific requirements?"
                ></textarea>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Property Size
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#6db52c] focus:border-[#6db52c]">
                  <option>Studio (1 room)</option>
                  <option>1-2 bedrooms</option>
                  <option>3-4 bedrooms</option>
                  <option>5+ bedrooms</option>
                  <option>Office (small)</option>
                  <option>Office (large)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#6db52c] focus:border-[#6db52c]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#6db52c] focus:border-[#6db52c]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-6 bg-[#6db52c] hover:bg-[#5da028] text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl mt-6"
              >
                <Sparkles className="mr-2" />
                Get My Free Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
