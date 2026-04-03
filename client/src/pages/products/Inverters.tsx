import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const inverters = [
  { brand: "Luminous", model: "Eco Volt Neo 1050", capacity: "900VA / 12V", price: "₹4,200" },
  { brand: "Microtek", model: "UPS Sebz 1100VA", capacity: "1100VA / 12V", price: "₹4,800" },
  { brand: "V-Guard", model: "Prime 1150", capacity: "1000VA / 12V", price: "₹4,500" },
  { brand: "Luminous", model: "Zelio+ 1100", capacity: "900VA / 12V", price: "₹5,100" },
  { brand: "Exide", model: "Star 1050VA", capacity: "1050VA / 12V", price: "₹4,650" },
  { brand: "Livguard", model: "i2-020ST", capacity: "1600VA / 24V", price: "₹7,200" },
];

export default function Inverters() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverters for Sale in Puducherry | Luminous, Microtek, V-Guard | K7 Power Solution"
        description="Buy inverters in Puducherry from K7 Power Solution — authorised dealer for Luminous, Microtek, V-Guard and more. Expert installation. Call +91 9600571801."
        keywords="inverter dealer Puducherry, buy inverter Puducherry, Luminous inverter Puducherry, Microtek inverter Puducherry, V-Guard inverter Puducherry, home inverter Puducherry"
        canonical="https://k7powersolution.in/products/inverters"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Products", url: "https://k7powersolution.in/products/inverters" },
          { name: "Inverters", url: "https://k7powersolution.in/products/inverters" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-blue-700" />
          <h1 className="text-4xl font-bold">Inverters for Sale in Puducherry</h1>
        </div>
        <p className="text-lg text-gray-600 mb-10">Buy home and commercial inverters in Puducherry from K7 Power Solution — authorised dealer for Luminous, Microtek, V-Guard and more. All with manufacturer warranty and professional installation available.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inverters.map((item, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-xs font-semibold text-blue-700 uppercase mb-2">{item.brand}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.model}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.capacity}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-700">{item.price}</span>
                <a href="tel:+919600571801" className="text-sm font-medium text-blue-700 hover:underline">Call for quote</a>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
