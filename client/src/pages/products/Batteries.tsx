import { Card } from "@/components/ui/card";
import { Battery } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const batteries = [
  { brand: "Exide", model: "Inva Tubular IT500", capacity: "150Ah / 12V", price: "₹13,500" },
  { brand: "Amaron", model: "Inverter Battery CR-CRTT150", capacity: "150Ah / 12V", price: "₹14,200" },
  { brand: "Luminous", model: "Red Charge RC 18000", capacity: "150Ah / 12V", price: "₹13,800" },
  { brand: "Exide", model: "Inva Tubular IT400", capacity: "120Ah / 12V", price: "₹11,200" },
  { brand: "Livguard", model: "IT 1548ST", capacity: "150Ah / 12V", price: "₹13,000" },
  { brand: "V-Guard", model: "Dyna Pro 1500", capacity: "150Ah / 12V", price: "₹13,200" },
];

export default function Batteries() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter Batteries for Sale in Puducherry | Exide, Amaron, Livguard | K7 Power Solution"
        description="Buy Exide, Amaron and Livguard inverter batteries in Puducherry. Authorised dealer with doorstep delivery and installation. Call +91 9600571801."
        keywords="battery dealer Puducherry, Exide battery Puducherry, Amaron battery Puducherry, Livguard battery Puducherry, tubular battery Puducherry, inverter battery Puducherry"
        canonical="https://k7powersolution.in/products/batteries"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Products", url: "https://k7powersolution.in/products/batteries" },
          { name: "Batteries", url: "https://k7powersolution.in/products/batteries" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Battery className="w-8 h-8 text-blue-700" />
          <h1 className="text-4xl font-bold">Inverter Batteries for Sale in Puducherry</h1>
        </div>
        <p className="text-lg text-gray-600 mb-10">Buy Exide, Amaron and Livguard inverter batteries in Puducherry from K7 Power Solution — authorised dealer with doorstep delivery and installation. All batteries carry manufacturer warranty.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batteries.map((item, i) => (
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
