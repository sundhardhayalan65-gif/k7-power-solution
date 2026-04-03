import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import SEO from "@/components/SEO";

export default function Story() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="About K7 Power Solution | Inverter & Battery Dealer Puducherry Since 2009"
        description="K7 Power Solution has been Puducherry's trusted inverter and battery dealer since 2009. Learn how we built 15+ years of honest service in Puducherry."
        keywords="about K7 Power Solution, inverter dealer Puducherry history, power backup company Puducherry, trusted inverter service Puducherry"
        canonical="https://k7powersolution.in/about/story"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "About", url: "https://k7powersolution.in/about/story" },
          { name: "Our Story", url: "https://k7powersolution.in/about/story" },
        ]}
      />
      <Navbar isScrolled={true} />
      <div className="pt-28 pb-20 container max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">K7 Power Solution — Puducherry's Inverter & Battery Experts Since 2009</h1>
        <div className="space-y-5 text-gray-600 text-base leading-relaxed">
          <p>K7 Power Solution was established in Puducherry with one purpose: to make reliable power backup accessible to every home and business in the region.</p>
          <p>What started as a small inverter repair shop has grown, over 15+ years, into one of Puducherry's most trusted names in power backup solutions. We've served thousands of customers — from families tired of power cuts to businesses that simply cannot afford downtime.</p>
          <p>We are an authorised dealer for all major inverter and battery brands including Exide, Amaron, Luminous, Microtek, V-Guard, and Livguard. Every product we sell is genuine, every installation is done by certified technicians, and every customer gets our full after-sales support.</p>
          <p>Our commitment is simple: give you the best solution at a fair price, and stand behind our work long after the sale.</p>
        </div>
      </div>
      <MobileCTA />
    </div>
  );
}
