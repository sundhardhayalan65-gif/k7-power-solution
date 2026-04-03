import { Card } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const upsSystems = [
  { brand: "APC", model: "Back-UPS BX600C", capacity: "600VA / 360W", price: "₹4,800", use: "Home & SOHO" },
  { brand: "Microtek", model: "UPS EB 1100 VA", capacity: "1100VA / 660W", price: "₹6,500", use: "Office Use" },
  { brand: "APC", model: "Smart-UPS 1500VA", capacity: "1500VA / 980W", price: "₹22,000", use: "Server Room" },
  { brand: "V-Guard", model: "Sesto 600", capacity: "600VA / 360W", price: "₹4,200", use: "Home Use" },
  { brand: "Luminous", model: "Optimus 1000", capacity: "1000VA / 700W", price: "₹7,800", use: "Small Business" },
  { brand: "Microtek", model: "UPS SEBz 1100VA", capacity: "1100VA / 770W", price: "₹6,200", use: "Office Use" },
];

export default function UPS() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="UPS Systems in Puducherry | APC, Microtek, V-Guard | K7 Power Solution"
        description="Buy and install UPS systems in Puducherry for homes, offices and server rooms. K7 Power Solution — authorised UPS dealer. Call +91 9600571801."
        keywords="UPS dealer Puducherry, UPS installation Puducherry, APC UPS Puducherry, Microtek UPS Puducherry, power backup Puducherry, office UPS Puducherry"
        canonical="https://k7powersolution.in/products/ups"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Products", url: "https://k7powersolution.in/products/ups" },
          { name: "UPS Systems", url: "https://k7powersolution.in/products/ups" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="w-8 h-8 text-blue-700" />
          <h1 className="text-4xl font-bold">UPS Systems in Puducherry</h1>
        </div>
        <p className="text-lg text-gray-600 mb-10">Buy and install UPS systems in Puducherry for homes, offices, and server rooms. K7 Power Solution protects your equipment from power cuts and voltage fluctuations — certified installation included.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upsSystems.map((item, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-xs font-semibold text-blue-700 uppercase mb-2">{item.brand}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.model}</h3>
              <p className="text-sm text-gray-500 mb-1">{item.capacity}</p>
              <p className="text-xs text-orange-600 font-medium mb-4">{item.use}</p>
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
