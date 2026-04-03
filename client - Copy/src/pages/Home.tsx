import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Zap, Battery, Wrench, RotateCcw, Cpu, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Industrial
 * - Trustworthiness through clean structure and organized layouts
 * - Technical clarity with progressive disclosure
 * - Purposeful minimalism with high contrast and readability
 * - Accessibility-first approach
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Zap,
      title: "Inverter Sales",
      description: "Wide selection of high-quality inverters from leading brands with expert consultation",
    },
    {
      icon: Battery,
      title: "Battery Sales",
      description: "Durable batteries with long life and superior performance from trusted brands",
    },
    {
      icon: Wrench,
      title: "Inverter Repair",
      description: "Expert repair and troubleshooting for all inverter types with genuine parts",
    },
    {
      icon: RotateCcw,
      title: "Battery Replacement",
      description: "Hassle-free battery replacement with professional installation and disposal",
    },
    {
      icon: Cpu,
      title: "UPS Installation",
      description: "Professional UPS system installation for businesses and commercial spaces",
    },
    {
      icon: AlertCircle,
      title: "Emergency Service",
      description: "24/7 rapid response for urgent power backup issues and breakdowns",
    },
  ];

  const processSteps = [
    { number: "01", title: "Inspection", description: "We assess your current power setup and understand your requirements" },
    { number: "02", title: "Diagnosis", description: "Identify issues and determine the best solution for your needs" },
    { number: "03", title: "Solution", description: "Present tailored recommendations with transparent pricing" },
    { number: "04", title: "Installation", description: "Professional installation by certified technicians" },
    { number: "05", title: "Testing", description: "Comprehensive testing to ensure optimal performance" },
    { number: "06", title: "Support", description: "Ongoing support and maintenance for peace of mind" },
  ];

  const brands = [
    { name: "Exide", description: "Premium Battery Solutions" },
    { name: "Amaron", description: "High-Performance Batteries" },
    { name: "Luminous", description: "Reliable Inverter Systems" },
    { name: "Microtek", description: "Advanced Power Solutions" },
    { name: "V-Guard", description: "Quality Power Backup" },
    { name: "Livguard", description: "Durable Battery Systems" },
  ];

  const areas = [
    "White Town",
    "Lawspet",
    "Reddiarpalayam",
    "Mudaliarpet",
    "Muthialpet",
    "Villianur",
    "Ariyankuppam",
    "Kalapet",
    "Thattanchavady",
  ];

  const stats = [
    { number: "15+", label: "Years Industry Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Support" },
    { number: "6", label: "Major Brands" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">K7 Power</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition">Services</a>
            <a href="#process" className="text-gray-700 hover:text-blue-700 transition">How It Works</a>
            <a href="#brands" className="text-gray-700 hover:text-blue-700 transition">Brands</a>
            <a href="#coverage" className="text-gray-700 hover:text-blue-700 transition">Coverage</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+919600571801">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">POWER SOLUTIONS</div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Reliable Inverter & Battery Solutions</h1>
              <p className="text-lg text-blue-100">15+ Years of Trusted Technical Experience in Puducherry. Expert sales, service, and repair for all major brands.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919600571801">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96 bg-blue-600 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive power backup solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <Icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple and transparent approach to power solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-700 text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Authorized Dealer</h2>
            <p className="text-lg text-gray-600">Partnerships with leading inverter and battery manufacturers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <Card key={idx} className="p-8 text-center border border-gray-200 hover:border-blue-700 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600">{brand.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section id="coverage" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage Area</h2>
            <p className="text-lg text-gray-600">Service Areas in Puducherry</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Puducherry & Surrounding Areas</h3>
              <p className="text-gray-600 mb-8">Comprehensive inverter and battery services throughout Puducherry. Whether you're in the city center or outskirts, our team is ready to serve you.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Reliable Power Backup?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact K7 Power Solution today for expert advice, competitive pricing, and professional service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919600571801">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">K7 Power Solution</span>
              </div>
              <p className="text-sm">Trusted inverter and battery dealer in Puducherry since 2009.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#process" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#brands" className="hover:text-white transition">Brands</a></li>
                <li><a href="#coverage" className="hover:text-white transition">Coverage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+919600571801" className="hover:text-white transition">+91 9600571801</a></li>
                <li><a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Location</h4>
              <p className="text-sm">Puducherry, India</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 K7 Power Solution. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
