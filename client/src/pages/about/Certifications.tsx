import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const certs = [
  { brand: "Exide", type: "Authorised Dealer", description: "Certified dealer for the full range of Exide inverter batteries and home UPS systems." },
  { brand: "Amaron", type: "Authorised Dealer", description: "Authorised to sell and service Amaron inverter batteries across Puducherry." },
  { brand: "Luminous", type: "Authorised Dealer", description: "Certified dealer and service partner for Luminous inverters and batteries." },
  { brand: "Microtek", type: "Authorised Dealer", description: "Authorised dealer for Microtek UPS and inverter systems." },
  { brand: "V-Guard", type: "Authorised Dealer", description: "Certified dealer for V-Guard power backup and battery products." },
  { brand: "Livguard", type: "Authorised Dealer", description: "Authorised dealer for Livguard inverter batteries with full warranty support." },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Authorised Dealer Certifications | K7 Power Solution Puducherry"
        description="K7 Power Solution is an authorised dealer for Exide, Amaron, Luminous, Microtek, V-Guard and Livguard in Puducherry. All products carry genuine manufacturer warranty."
        keywords="authorised inverter dealer Puducherry, certified battery dealer Puducherry, Exide dealer Puducherry, Amaron dealer Puducherry"
        canonical="https://k7powersolution.in/about/certifications"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "About", url: "https://k7powersolution.in/about/certifications" },
          { name: "Certifications", url: "https://k7powersolution.in/about/certifications" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Certifications</h1>
        <p className="text-lg text-gray-600 mb-10">K7 Power Solution is an authorised dealer for all major inverter and battery brands. Every product sold carries a genuine manufacturer warranty.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <Card key={i} className="p-6 border border-gray-200 hover:border-blue-700 transition-colors">
              <div className="text-2xl font-bold text-gray-900 mb-1">{cert.brand}</div>
              <div className="text-sm font-semibold text-blue-700 mb-3">{cert.type}</div>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
