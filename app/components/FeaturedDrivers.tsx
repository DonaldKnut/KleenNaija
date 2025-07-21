import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

type Cleaner = {
  id: string;
  name: string;
  experience: number;
  location: string;
  bio: string;
  specialty: string;
  rating: number;
  photo: string;
};

export default function FeaturedCleaners() {
  const cleaners: Cleaner[] = [
    {
      id: "1",
      name: "Amina Adebayo",
      experience: 5,
      location: "Victoria Island",
      bio: "Professional cleaner with expertise in eco-friendly products and deep cleaning techniques.",
      specialty: "Residential Cleaning",
      rating: 4.9,
      photo: "/laughing-portrait-black-woman-cleaning-600nw-2326402989.webp",
    },
    {
      id: "2",
      name: "Chike Obi",
      experience: 7,
      location: "Lekki Phase 1",
      bio: "Commercial cleaning specialist with hospital-grade sanitation certification.",
      specialty: "Office Cleaning",
      rating: 4.8,
      photo:
        "/smiling-man-cleaning-kitchen-worktop-portrait-home-97363049.webp",
    },
    {
      id: "3",
      name: "Funmilayo Adeleke",
      experience: 3,
      location: "Ikoyi",
      bio: "Detail-oriented expert in move-in/move-out and post-construction cleaning.",
      specialty: "Deep Cleaning",
      rating: 4.7,
      photo: "/african-american-woman-braided-hair-600nw-2033240117.webp",
    },
  ];

  return (
    <section
      className="py-16 px-6 sm:px-12 md:px-20 bg-[#1f2a40] transition"
      id="cleaners"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Trusted Cleaning Team
          </h2>
          <div className="w-20 h-1 bg-[#6db52c] mx-auto"></div>
          <p className="mt-4 text-[#e8f4e8] max-w-2xl mx-auto">
            Meet our vetted professionals dedicated to making your space
            spotless
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cleaners.map((cleaner) => (
            <div
              key={cleaner.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72 w-full group">
                <Image
                  src={cleaner.photo}
                  alt={cleaner.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#6db52c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {cleaner.specialty}
                    </span>
                    <span className="bg-white text-[#6db52c] text-sm font-bold px-2 py-1 rounded flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-[#6db52c]" />
                      {cleaner.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">
                    {cleaner.name}
                  </h3>
                  <span className="text-[#5da028] text-sm font-medium bg-[#e8f4e8] px-2 py-1 rounded">
                    {cleaner.experience}+ years
                  </span>
                </div>

                <p className="text-gray-600 text-sm">
                  <span className="text-[#6db52c] font-medium">
                    {cleaner.location}
                  </span>
                </p>

                <p className="text-gray-700">{cleaner.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#get-quote"
            className="inline-flex items-center px-8 py-3 bg-[#6db52c] hover:bg-[#5da028] text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
            <Sparkles className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
