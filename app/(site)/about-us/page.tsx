import Image from "next/image";
import { Award, Leaf, ShieldCheck, Users, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#1f2a40] text-white py-20 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionizing Cleanliness in Nigeria
          </h1>
          <div className="w-24 h-1 bg-[#6db52c] mx-auto mb-6"></div>
          <p className="text-xl text-[#e8f4e8] max-w-3xl mx-auto">
            Since 2015, we&apos;ve been setting new standards in professional
            cleaning services across Lagos and beyond.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/domestic-cleaning-team-portrait-professional-cleaners-couple-posing-household-supplies-happy-black-man-woman-hands-181937562.webp"
              alt="Our cleaning team at work"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-[#e8f4e8] mb-4">
              Founded by Pastor Ifeanyi Ojugo after noticing the lack of
              standardized cleaning services in Nigeria, KleenNaija began as a
              small team of 5 passionate professionals. Today, we&apos;re a
              family of 200+ certified cleaners serving over 3,000 satisfied
              clients monthly.
            </p>
            <p className="text-[#e8f4e8] mb-6">
              What sets us apart is our Nigerian-made approach — combining
              global best practices with locally-sourced eco-friendly products
              that work best in our climate.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-[#6db52c]/10 px-4 py-2 rounded-full">
                <Leaf className="text-[#6db52c] mr-2" size={18} />
                <span className="text-sm font-medium text-[#e8f4e8]">
                  Eco-Friendly
                </span>
              </div>
              <div className="flex items-center bg-[#6db52c]/10 px-4 py-2 rounded-full">
                <ShieldCheck className="text-[#6db52c] mr-2" size={18} />
                <span className="text-sm font-medium text-[#e8f4e8]">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center bg-[#6db52c]/10 px-4 py-2 rounded-full">
                <Award className="text-[#6db52c] mr-2" size={18} />
                <span className="text-sm font-medium text-[#e8f4e8]">
                  5-Star Rated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-10 h-10 text-[#6db52c] mx-auto" />,
                title: "Excellence",
                desc: "We don't just clean — we transform spaces using premium products and meticulous attention to detail.",
              },
              {
                icon: <Users className="w-10 h-10 text-[#6db52c] mx-auto" />,
                title: "Community",
                desc: "We train and employ local talent, reinvesting 5% of profits into neighborhood development.",
              },
              {
                icon: <Leaf className="w-10 h-10 text-[#6db52c] mx-auto" />,
                title: "Sustainability",
                desc: "Our green cleaning initiative prevents 2,000+ plastic bottles from landfills monthly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#2c3a56] p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#e8f4e8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="bg-[#6db52c] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the CrystalClean Difference?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients enjoying spotless spaces without
            the hassle.
          </p>
          <a
            href="#get-quote"
            className="inline-flex items-center px-8 py-3 bg-white text-[#1f2a40] font-medium rounded-lg transition duration-300 shadow-md hover:bg-[#e8f4e8]"
          >
            Get Your Free Quote
            <Sparkles className="ml-2 w-5 h-5 text-[#6db52c]" />
          </a>
        </div>
      </div>
    </section>
  );
}
