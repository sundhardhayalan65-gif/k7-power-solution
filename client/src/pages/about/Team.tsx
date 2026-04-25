import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";
import { fadeUp, stagger, scaleUp, viewport } from "@/lib/animations";

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-10"
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold mb-4">Our Team</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-gray-600">The dedicated people behind K7 Power Solution's trusted service.</motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.10)" }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            >
              <Card className="p-6 border border-gray-200 h-full">
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-bold mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {member.name.charAt(0)}
                </motion.div>
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-700 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <MobileCTA />
    </div>
  );
}
