import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const team = [
  { name: "K. Rajan", role: "Founder & Managing Director", bio: "15+ years in the power backup industry. Visionary behind K7 Power Solution's growth across Puducherry." },
  { name: "S. Priya", role: "Service Head", bio: "Certified electrical technician specialising in inverter diagnosis and repair for all major brands." },
  { name: "M. Arun", role: "Sales Manager", bio: "Helps customers find the perfect inverter-battery combination for their specific needs and budget." },
  { name: "T. Deepa", role: "Customer Support", bio: "Ensures every customer receives prompt, friendly support from enquiry through to after-sales service." },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Our Team | K7 Power Solution Puducherry"
        description="Meet the certified technicians and dedicated staff behind K7 Power Solution — Puducherry's trusted inverter and battery dealer since 2009."
        keywords="K7 Power Solution team, inverter technician Puducherry, battery service team Puducherry"
        canonical="https://k7powersolution.in/about/team"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "About", url: "https://k7powersolution.in/about/team" },
          { name: "Our Team", url: "https://k7powersolution.in/about/team" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-lg text-gray-600 mb-10">The dedicated people behind K7 Power Solution's trusted service.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <Card key={i} className="p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-sm font-semibold text-blue-700 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
