import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const areas = [
  "White Town", "Lawspet", "Reddiarpalayam", "Mudaliarpet", "Muthialpet",
  "Villianur", "Ariyankuppam", "Kalapet", "Thattanchavady", "Gorimedu",
  "Nellithope", "Ozhukarai", "Sedarapet", "Bahour", "Manavely",
];

export default function Coverage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery Service Areas in Puducherry | K7 Power Solution"
        description="K7 Power Solution provides doorstep inverter repair, battery replacement and UPS installation across all areas of Puducherry including White Town, Lawspet, Reddiarpalayam and more."
        keywords="inverter service areas Puducherry, battery service Lawspet, inverter repair White Town, power backup Reddiarpalayam, inverter service Mudaliarpet Puducherry"
        canonical="https://k7powersolution.in/about/coverage"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "About", url: "https://k7powersolution.in/about/story" },
          { name: "Coverage Area", url: "https://k7powersolution.in/about/coverage" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Inverter & Battery Service Areas in Puducherry</h1>
        <p className="text-lg text-gray-600 mb-10">K7 Power Solution provides doorstep inverter repair, battery replacement and UPS installation across all areas of Puducherry — including White Town, Lawspet, Reddiarpalayam, Mudaliarpet and more.</p>
        <Card className="p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Puducherry & Surrounding Areas</h2>
          <p className="text-gray-600 mb-8">Whether you're in the city centre or the outskirts, our team is ready to come to you for installation, repair, or replacement.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </Card>
        <p className="mt-6 text-sm text-gray-500">Don't see your area? Call us at <a href="tel:+919600571801" className="text-blue-700 font-medium hover:underline">+91 9600571801</a> — we may still be able to help.</p>
      </div>
      <MobileCTA />
    </div>
  );
}
