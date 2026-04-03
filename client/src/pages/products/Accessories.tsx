import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const accessories = [
  { name: "Inverter Stand / Trolley", description: "Heavy-duty metal stand for inverter and battery, with wheels for easy movement.", price: "₹850" },
  { name: "Battery Cables (Set)", description: "High-quality copper cables for connecting inverter to battery. Includes lugs and insulation.", price: "₹350" },
  { name: "MCB / Fuse Protection Kit", description: "Protect your inverter from overloads and short circuits.", price: "₹220" },
  { name: "Distilled Water (5L)", description: "For topping up tubular and flat-plate batteries to maintain electrolyte levels.", price: "₹120" },
  { name: "Battery Terminal Clamps", description: "Anti-corrosion terminal clamps for secure battery connections.", price: "₹180" },
  { name: "Charge Controller", description: "PWM solar charge controller for solar-inverter hybrid setups.", price: "₹1,400" },
];

export default function Accessories() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery Accessories in Puducherry | K7 Power Solution"
        description="Buy inverter stands, battery cables, MCB protection kits and accessories in Puducherry. Call K7 Power Solution — +91 9600571801."
        keywords="inverter accessories Puducherry, battery cables Puducherry, inverter stand Puducherry, MCB kit Puducherry"
        canonical="https://k7powersolution.in/products/accessories"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Products", url: "https://k7powersolution.in/products/accessories" },
          { name: "Accessories", url: "https://k7powersolution.in/products/accessories" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Accessories</h1>
        <p className="text-lg text-gray-600 mb-10">Everything you need to keep your power backup system running perfectly — cables, stands, protection kits, and more.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((item, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
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
