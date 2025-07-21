import { Home, Building, Bath, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-[#6db52c]" />,
      title: "Residential Cleaning",
      desc: "Comprehensive home cleaning tailored to your schedule and needs.",
      features: [
        "Deep cleaning",
        "Regular maintenance",
        "Move-in/move-out",
        "Post-construction",
      ],
      price: "From ₦25,000/session",
    },
    {
      icon: <Building className="w-8 h-8 text-[#6db52c]" />,
      title: "Commercial Cleaning",
      desc: "Professional workspaces cleaning to boost productivity and hygiene.",
      features: [
        "Daily office cleaning",
        "Carpet shampooing",
        "Window cleaning",
        "Restroom sanitation",
      ],
      price: "Custom quotes",
    },
    {
      icon: <Bath className="w-8 h-8 text-[#6db52c]" />,
      title: "Specialized Cleaning",
      desc: "Advanced solutions for unique cleaning challenges.",
      features: [
        "Hospital-grade disinfection",
        "Upholstery cleaning",
        "Pressure washing",
        "Odor elimination",
      ],
      price: "From ₦40,000",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#1f2a40] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Cleaning Services
          </h1>
          <div className="w-24 h-1 bg-[#6db52c] mx-auto mb-6"></div>
          <p className="text-xl text-[#e8f4e8] max-w-3xl mx-auto">
            Customized solutions designed for Nigerian homes and businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2c3a56] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-[#6db52c]/10 rounded-full">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
                <p className="text-[#e8f4e8] mb-6">{service.desc}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-[#e8f4e8]">
                      <span className="text-[#6db52c] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-[#6db52c] font-bold">{service.price}</div>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#get-quote"
                  className="block w-full text-center py-2 px-4 border border-[#6db52c] text-[#6db52c] hover:bg-[#6db52c] hover:text-white rounded-lg transition duration-300"
                >
                  Request Service
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-[#2c3a56] rounded-2xl p-12 shadow-md">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our 4-Step Cleaning Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-[#e8f4e8]">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We assess your space and specific needs",
              },
              {
                step: "02",
                title: "Custom Plan",
                desc: "Tailored cleaning strategy with pricing",
              },
              {
                step: "03",
                title: "Professional Service",
                desc: "Certified cleaners execute with precision",
              },
              {
                step: "04",
                title: "Quality Check",
                desc: "Supervisor inspection before delivery",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#6db52c]/10 rounded-full flex items-center justify-center text-2xl font-bold text-[#6db52c] mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-xl text-[#e8f4e8] mb-8 max-w-2xl mx-auto">
            We customize cleaning solutions for any space — just ask!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#6db52c] hover:bg-[#5da028] text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="mr-2" />
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
