import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const tips = [
  { title: "Top Up Battery Water Regularly", body: "Check electrolyte levels every 2–3 months. Top up with distilled water only — never tap water or acid. Keep levels between MIN and MAX marks." },
  { title: "Keep Battery Terminals Clean", body: "Corrosion on terminals causes resistance and reduces efficiency. Clean with a dry cloth or terminal spray. Apply petroleum jelly to prevent future corrosion." },
  { title: "Ensure Proper Ventilation", body: "Inverter batteries release hydrogen gas during charging. Install your battery in a well-ventilated area away from flames or sparks." },
  { title: "Avoid Deep Discharge", body: "Don't let your battery drain completely — this shortens its life. Switch off the inverter when backup gets very low and recharge promptly." },
  { title: "Run a Full Charge Cycle Monthly", body: "Allow the battery to fully charge at least once a month. This conditions the cells and maintains capacity over time." },
  { title: "Check Inverter Cooling Vents", body: "Dust accumulation in inverter vents causes overheating. Clean the vents with a dry cloth or compressed air every 3–6 months." },
];

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery Maintenance Tips | K7 Power Solution Puducherry"
        description="Learn how to maintain your inverter and battery for peak performance. Tips on water top-up, terminal cleaning, ventilation and more from K7 Power Solution, Puducherry."
        keywords="inverter maintenance tips, battery maintenance Puducherry, how to maintain inverter battery, inverter battery care tips"
        canonical="https://k7powersolution.in/knowledge/maintenance"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Knowledge", url: "https://k7powersolution.in/knowledge/maintenance" },
          { name: "Maintenance Tips", url: "https://k7powersolution.in/knowledge/maintenance" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Maintenance Tips</h1>
        <p className="text-lg text-gray-600 mb-10">Follow these simple tips to keep your inverter and battery performing at their best for years.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <Card key={i} className="p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
