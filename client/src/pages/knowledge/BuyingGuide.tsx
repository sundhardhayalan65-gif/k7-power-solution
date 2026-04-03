import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const steps = [
  { title: "Calculate Your Power Load", body: "List all appliances you want to run during a power cut (fans, lights, TV, router). Add up their wattage to find your total load in watts." },
  { title: "Determine Backup Time", body: "Decide how many hours of backup you need. Longer backup = larger battery capacity (measured in Ah)." },
  { title: "Choose Inverter VA Rating", body: "Use the formula: VA = Watts ÷ Power Factor (0.8). For 500W load, you need at least a 625VA inverter. Always buy 20% above your load." },
  { title: "Pick the Right Battery", body: "For 2–3 hours of backup with a 500W load, a 150Ah 12V tubular battery is ideal. Our team can calculate the exact requirement for you." },
  { title: "Select a Trusted Brand", body: "K7 Power Solution is an authorised dealer for Exide, Amaron, Luminous, Microtek, V-Guard, and Livguard — all backed by manufacturer warranty." },
  { title: "Get Professional Installation", body: "Improper wiring can damage your inverter and battery. Our certified technicians ensure safe, code-compliant installation with a service guarantee." },
];

export default function BuyingGuide() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery Buying Guide for Puducherry Homes | K7 Power Solution"
        description="Step-by-step guide to choosing the right inverter and battery for your Puducherry home. Calculate load, pick VA rating and battery capacity. Expert advice from K7 Power Solution."
        keywords="inverter buying guide Puducherry, how to choose inverter battery, inverter VA rating calculator, best inverter for home Puducherry"
        canonical="https://k7powersolution.in/knowledge/buying-guide"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Knowledge", url: "https://k7powersolution.in/knowledge/buying-guide" },
          { name: "Buying Guide", url: "https://k7powersolution.in/knowledge/buying-guide" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Inverter & Battery Buying Guide</h1>
        <p className="text-lg text-gray-600 mb-10">Follow these 6 steps to choose the right inverter and battery combination for your home or business.</p>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <Card key={i} className="p-6 border border-gray-200 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-lg shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="mt-10 p-6 bg-blue-700 text-white border-0">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">Not sure? Let us help.</h3>
              <p className="text-blue-100 text-sm mb-3">Call us and our experts will assess your needs and recommend the best solution at the right price.</p>
              <a href="tel:+919600571801" className="inline-block bg-white text-blue-700 font-semibold px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
                Call +91 9600571801
              </a>
            </div>
          </div>
        </Card>
      </div>
      <MobileCTA />
    </div>
  );
}
