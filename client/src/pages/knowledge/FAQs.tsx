import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

const faqs = [
  { q: "How long does an inverter battery last?", a: "A good tubular battery typically lasts 4–7 years with proper maintenance. Flat-plate batteries last 3–5 years on average." },
  { q: "How often should I add water to my battery?", a: "Check the water level every 2–3 months and top up with distilled water if below the minimum mark. Never use tap water." },
  { q: "My inverter beeps constantly — what's wrong?", a: "Continuous beeping usually means the battery is low, overloaded, or there's a fault. Call us and we'll diagnose it quickly." },
  { q: "Can I use any battery with my inverter?", a: "Not necessarily. The battery capacity (Ah) must match your inverter's requirements. Our team will help you find the right combination." },
  { q: "Do you offer doorstep service in Puducherry?", a: "Yes! We provide doorstep installation, repair, and battery replacement across all areas of Puducherry." },
  { q: "How long does a repair take?", a: "Most inverter repairs are completed within 1–2 hours on-site. Complex issues may require the unit to be taken to our workshop." },
  { q: "Do your products come with a warranty?", a: "Yes. All inverters and batteries come with manufacturer warranty. We also provide an additional service guarantee on all our installations." },
  { q: "Is emergency service available on weekends?", a: "Yes, our emergency line is available 24/7 including weekends and public holidays." },
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Inverter & Battery FAQs Puducherry | K7 Power Solution"
        description="Answers to common questions about inverters and batteries in Puducherry — how long batteries last, repair times, service areas and more. K7 Power Solution."
        keywords="inverter FAQ Puducherry, battery questions Puducherry, how long battery lasts, inverter repair FAQ, power backup questions Puducherry"
        canonical="https://k7powersolution.in/knowledge/faqs"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Knowledge", url: "https://k7powersolution.in/knowledge/faqs" },
          { name: "FAQs", url: "https://k7powersolution.in/knowledge/faqs" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Inverter & Battery FAQs — Puducherry</h1>
        <p className="text-lg text-gray-600 mb-10">Common questions from our Puducherry customers about inverters, batteries, repair and our services.</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
