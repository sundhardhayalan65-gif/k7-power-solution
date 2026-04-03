import { Button } from "@/components/ui/button";
import {
  Phone, Zap, Battery, Wrench,
  RotateCcw, Cpu, AlertCircle, CheckCircle2,
  Star, ShieldCheck, Clock4, ThumbsUp, BadgeCheck, Headphones,
  Award, MapPin, ChevronDown, ChevronUp, Mail,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SEO from "@/components/SEO";
import { useScrolled } from "@/hooks/useScrolled";

export default function Home() {
  const isScrolled = useScrolled();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { icon: Zap,         title: "Inverter Sales",       cta: "Get a Quote",   description: "Wide selection from Luminous, Microtek, V-Guard and more. We match you to the right model — not the most expensive one." },
    { icon: Battery,     title: "Battery Sales",         cta: "Get a Quote",   description: "Long-life tubular and flat-plate batteries from Exide, Amaron, Livguard. Every battery comes with a genuine manufacturer warranty." },
    { icon: Wrench,      title: "Inverter Repair",       cta: "Book Repair",   description: "Most repairs done same day. We use genuine parts, give you a written quote before we start, and guarantee our work." },
    { icon: RotateCcw,   title: "Battery Replacement",   cta: "Replace Now",   description: "Old battery dragging? We swap it out the same day — including safe disposal of the old one. No mess, no hassle." },
    { icon: Cpu,         title: "UPS Installation",      cta: "Get Installed", description: "Office or commercial space? We design, supply and install UPS systems that match your load. Certified and fully tested." },
    { icon: AlertCircle, title: "24/7 Emergency",        cta: "Call Now",      description: "Power failure at 2am? Call us. Our emergency line is always open — rapid response across all of Puducherry." },
  ];

  const processSteps = [
    { number: "01", title: "You Call or WhatsApp",  description: "Tell us what's happened. We respond within 30 minutes." },
    { number: "02", title: "Free Assessment",        description: "We visit, assess the issue and give you a clear, honest quote — no obligation." },
    { number: "03", title: "You Approve",            description: "Only once you're happy with the price do we begin work." },
    { number: "04", title: "Fast Installation",      description: "Certified technicians complete the job cleanly and efficiently." },
    { number: "05", title: "Full Testing",           description: "We test everything before we leave. You see it working first." },
    { number: "06", title: "After-Sales Support",    description: "Something feels off later? One call and we're back." },
  ];

  const brands = ["Exide", "Amaron", "Luminous", "Microtek", "V-Guard", "Livguard"];

  const areas = [
    "White Town", "Lawspet", "Reddiarpalayam", "Mudaliarpet",
    "Muthialpet", "Villianur", "Ariyankuppam", "Kalapet", "Thattanchavady",
  ];

  const stats = [
    { number: "15+",    label: "Years in Business" },
    { number: "1,000+", label: "Happy Customers" },
    { number: "24/7",   label: "Emergency Line Open" },
    { number: "6",      label: "Authorised Brands" },
  ];

  const trustBadges = [
    { icon: Award,        text: "15+ Years Experience" },
    { icon: Zap,          text: "All Brands Supported" },
    { icon: ShieldCheck,  text: "Genuine Parts Only" },
    { icon: MapPin,       text: "Doorstep Service" },
    { icon: Clock4,       text: "Emergency Support" },
  ];

  const testimonials = [
    {
      name: "Ramesh K.",
      area: "Lawspet",
      stars: 5,
      text: "Battery died on a Sunday evening. K7 Power Solution came within 2 hours and had everything fixed. Genuine parts, fair price. Highly recommend.",
      date: "2 months ago",
    },
    {
      name: "Priya S.",
      area: "White Town",
      stars: 5,
      text: "Bought an Exide inverter + battery combo. The team explained everything clearly, no pressure at all. Installed the same day. Excellent service.",
      date: "3 months ago",
    },
    {
      name: "Arun M.",
      area: "Mudaliarpet",
      stars: 5,
      text: "Had an old inverter repaired. They diagnosed it in 20 minutes, gave me a written quote and fixed it within the hour. Very professional team.",
      date: "1 month ago",
    },
  ];

  const guarantees = [
    { icon: ShieldCheck, title: "Genuine Parts Only",    text: "We never use counterfeit parts. Every component is sourced directly from the manufacturer." },
    { icon: BadgeCheck,  title: "Written Quote First",   text: "You get a clear price in writing before we start. No hidden charges. No surprises." },
    { icon: ThumbsUp,    title: "Workmanship Guarantee", text: "If anything goes wrong due to our installation, we fix it free of charge. No questions asked." },
    { icon: Headphones,  title: "After-Sales Support",   text: "We don't disappear after the job. Call us anytime — we're a local business and we're here to stay." },
  ];

  const faqs = [
    {
      q: "How long does an inverter battery last in Puducherry?",
      a: "A quality tubular battery from brands like Exide or Amaron typically lasts 4–5 years in Puducherry conditions. Flat-plate batteries last around 3–4 years. Proper maintenance — including regular water top-ups and avoiding deep discharge — can extend battery life significantly.",
    },
    {
      q: "When should I refill the water in my inverter battery?",
      a: "Check the electrolyte level every 2–3 months. Top up with distilled water only (never tap water or acid) when the level drops below the MIN mark. In summer months, check more frequently as heat accelerates evaporation.",
    },
    {
      q: "Why is my inverter not charging the battery?",
      a: "Common causes include a faulty charger section inside the inverter, corroded battery terminals, or a worn-out battery that can no longer hold charge. We recommend calling us for a free diagnosis — most charging issues are fixed same day.",
    },
    {
      q: "How much backup time can I expect from an inverter?",
      a: "Backup time depends on your battery capacity (Ah) and total load (watts). For example, a 150Ah battery powering 3 fans + 5 LED lights (approx 300W) gives about 4–5 hours of backup. Our team can calculate the exact backup time for your specific setup.",
    },
    {
      q: "How quickly can K7 Power Solution reach me in Puducherry?",
      a: "For most areas in Puducherry, we can reach you within 2–3 hours of your call. For emergency breakdowns, we prioritise same-day visits. We cover White Town, Lawspet, Reddiarpalayam, Mudaliarpet, and all other Puducherry areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="K7 Power Solution | Inverter & Battery Dealer in Puducherry | Sales, Repair & Service"
        description="K7 Power Solution — Puducherry's trusted inverter and battery dealer since 2009. Authorised dealer for Exide, Amaron, Luminous, Microtek, V-Guard & Livguard. Same-day repair, battery replacement and 24/7 emergency service. Call +91 9600571801."
        keywords="inverter dealer Puducherry, battery dealer Puducherry, inverter repair Puducherry, Exide battery Puducherry, Amaron battery Puducherry, Luminous inverter Puducherry, UPS installation Puducherry, battery replacement Puducherry, power backup Puducherry"
        canonical="https://k7powersolution.in/"
        breadcrumbs={[{ name: "Home", url: "https://k7powersolution.in/" }]}
      />
      <Navbar isScrolled={isScrolled} />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        id="main-content"
        className="relative pt-28 pb-0 md:pt-36 bg-[#0f172a] text-white overflow-hidden"
        aria-label="K7 Power Solution — Inverter and Battery Service in Puducherry"
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600 opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative">
          <div className="max-w-2xl pb-14 md:pb-20 space-y-6">

            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Same-day service available today — limited slots
            </div>

            <h1 className="text-white leading-[1.1]">
              Power Cut? Inverter Problem? <br />
              <span className="text-blue-400">We Fix It Today.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Trusted inverter and battery dealer serving Puducherry since 2009.
              Sales, repair, and 24/7 emergency service for Exide, Amaron, Luminous, Microtek, V-Guard & Livguard.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white h-13 px-7 text-base font-bold shadow-lg shadow-green-900/30 gap-2 hover:scale-[1.02] transition-transform">
                  <WhatsAppIcon size={20} className="text-white" />
                  WhatsApp for Free Quote
                </Button>
              </a>
              <a href="tel:+919600571801" className="flex-1 sm:flex-none">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white h-13 px-7 text-base font-semibold gap-2">
                  <Phone className="w-5 h-5" />
                  +91 9600571801
                </Button>
              </a>
            </div>

            {/* Trust badges — 5 icon cards */}
            <div className="flex flex-wrap gap-2 pt-2">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm hover:bg-white/12 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-slate-700/60 bg-slate-900/60">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/60">
              {stats.map((stat, i) => (
                <div key={i} className="py-6 px-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white font-['Poppins']">{stat.number}</div>
                  <div className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 bg-white" aria-label="Inverter and Battery Services Puducherry">
        <div className="container">
          <div className="mb-14">
            <span className="section-label mb-3">Inverter & Battery Services in Puducherry</span>
            <h2 className="mt-3 mb-4">Every Power Problem in Puducherry. One Number.</h2>
            <p className="text-gray-500 max-w-xl">
              Inverter sales, battery replacement, repair and 24/7 emergency response —
              all from one authorised team serving Puducherry since 2009.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, cta }, i) => (
              <div key={i} className="service-card group bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors shrink-0">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
                <a href="tel:+919600571801" className="mt-5 text-sm font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  {cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mt-14 rounded-2xl bg-slate-50 border border-slate-100 p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-gray-900 text-xl">Not sure what you need?</p>
              <p className="text-gray-500 text-sm mt-1.5">Tell us what's happening — we'll diagnose it and give you a free, no-obligation quote.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold gap-2 h-11 px-6 hover:scale-[1.02] transition-transform">
                  <WhatsAppIcon size={18} className="text-white" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:+919600571801">
                <Button variant="outline" className="gap-2 h-11 px-6 font-semibold">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUARANTEES / TRUST ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-blue-700" aria-label="Why Choose K7 Power Solution Puducherry">
        <div className="container">
          <div className="mb-14 text-white">
            <span className="section-label !text-blue-300 before:bg-blue-300 mb-3">Why Puducherry Chooses Us</span>
            <h2 className="mt-3 mb-4 text-white">Our Promise to Every Puducherry Customer</h2>
            <p className="text-blue-100 max-w-xl">
              15+ years of honest service in Puducherry. Our reputation is built on getting it right every single time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-base mb-2">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS — Google Review Style ───────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50" aria-label="Customer Reviews Puducherry">
        <div className="container">
          <div className="mb-14">
            <span className="section-label mb-3">Puducherry Customer Reviews</span>
            <h2 className="mt-3 mb-4">What Puducherry Customers Say About Us</h2>
            <p className="text-gray-500 max-w-xl">Real reviews from homeowners and businesses across Puducherry who trust K7 Power Solution.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, area, stars, text, date }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                {/* Google-style header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{name}</div>
                      <div className="text-xs text-gray-400">{area}, Puducherry</div>
                    </div>
                  </div>
                  {/* Google G badge */}
                  <div className="flex flex-col items-end gap-1">
                    <div className="w-7 h-7 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                      <span className="text-xs font-extrabold text-blue-600">G</span>
                    </div>
                    <span className="text-[10px] text-gray-400">{date}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">"{text}"</p>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-100">
                  <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-semibold text-blue-700">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>

          {/* Rating summary */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 font-['Poppins']">4.9</div>
              <div className="flex gap-0.5 justify-center mt-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-1">127 reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden sm:block" />
            <div className="text-sm text-gray-600 text-center sm:text-left">
              <p className="font-semibold text-gray-900">Rated Excellent in Puducherry</p>
              <p className="mt-1 text-gray-500">Based on Google, Just Dial &amp; word-of-mouth reviews</p>
              <a
                href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-blue-700 font-semibold text-sm hover:underline"
              >
                <WhatsAppIcon size={14} className="text-blue-700" />
                Talk to us today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mb-14">
            <span className="section-label mb-3">How It Works</span>
            <h2 className="mt-3 mb-4">From Your Call to Job Done — Fast</h2>
            <p className="text-gray-500 max-w-xl">
              Simple, transparent process. No jargon, no hidden steps, no wasted time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-200 bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-700 font-['Poppins']">{step.number}</span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-gray-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDS ───────────────────────────────────────────────── */}
      <section id="brands" className="py-20 md:py-28 bg-slate-50" aria-label="Authorised Battery and Inverter Brands Puducherry">
        <div className="container">
          <div className="mb-14">
            <span className="section-label mb-3">Authorised Dealer in Puducherry</span>
            <h2 className="mt-3 mb-4">Inverter & Battery Brands We Stock in Puducherry</h2>
            <p className="text-gray-500 max-w-xl">
              Authorised dealer for Exide, Amaron, Luminous, Microtek, V-Guard and Livguard in Puducherry.
              Every product is genuine and carries a full manufacturer warranty.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, i) => (
              <div key={i} className="group border border-gray-200 bg-white rounded-xl py-7 px-4 text-center hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all shadow-sm cursor-default">
                <div className="text-base font-bold text-gray-800 group-hover:text-blue-700 transition-colors font-['Poppins']">{brand}</div>
                <div className="text-xs text-gray-400 mt-1.5 group-hover:text-blue-500 transition-colors">Authorised</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COVERAGE ─────────────────────────────────────────────── */}
      <section id="coverage" className="py-20 md:py-28 bg-white" aria-label="Inverter and Battery Service Areas in Puducherry">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="section-label mb-3">Inverter Service Areas — Puducherry</span>
              <h2 className="mt-3 mb-5">Doorstep Inverter & Battery Service Across Puducherry</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                No need to carry heavy equipment. Our team comes to your home or business anywhere
                in Puducherry — diagnosis, repair, or battery replacement done on-site, usually the same day.
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-7 flex gap-3">
                <Clock4 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-orange-800">Limited slots available today</p>
                  <p className="text-sm text-orange-700 mt-0.5">Book now to secure your same-day visit slot.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://wa.me/919600571801?text=I%20would%20like%20to%20book%20a%20visit" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold gap-2 h-11 px-6 hover:scale-[1.02] transition-transform">
                    <WhatsAppIcon size={18} className="text-white" />
                    Book via WhatsApp
                  </Button>
                </a>
                <a href="tel:+919600571801">
                  <Button variant="outline" className="gap-2 h-11 px-6 font-semibold">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-100 rounded-2xl shadow-sm p-7">
              <h3 className="text-gray-900 mb-5 pb-4 border-b border-gray-100 text-base font-semibold">Areas We Cover</h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-5 pt-4 border-t border-gray-100">
                Don't see your area? Call us — we may still be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50" aria-label="Frequently Asked Questions about Inverter and Battery Service Puducherry">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14 text-center">
              <span className="section-label mb-3 mx-auto">Common Questions</span>
              <h2 className="mt-3 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Everything you need to know about inverters, batteries and our service in Puducherry.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {faq.q}
                    </span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-blue-600 transition-colors" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-gray-50">
                      <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 mb-4">Have a question we haven't answered?</p>
              <a href="https://wa.me/919600571801?text=Hi%2C%20I%20have%20a%20question%20about%20inverter%2Fbattery" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold gap-2 h-11 px-7 hover:scale-[1.02] transition-transform">
                  <WhatsAppIcon size={18} className="text-white" />
                  Ask Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── URGENCY CTA ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-orange-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Today Only
            </div>
            <h2 className="text-white mb-3">Limited Service Slots Available Today</h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Book now to secure your same-day inverter and battery service.
              Our technicians are available across Puducherry — don't wait in the dark.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-[#080f1e] text-slate-400">
        <div className="container py-14">
          <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">

            {/* Brand + NAP */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base font-['Poppins'] block leading-tight">K7 Power Solution</span>
                  <span className="text-[10px] text-slate-500 leading-tight block">Complete Power Backup Solutions</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 text-slate-500">Inverter & Battery Dealer<br />Puducherry, India — 605001</p>

              {/* NAP block for local SEO */}
              <address className="not-italic space-y-2 text-sm mb-5">
                <a href="tel:+919600571801" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  +91 9600571801
                </a>
                <a href="mailto:k7powersolution@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  k7powersolution@gmail.com
                </a>
                <a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                  WhatsApp
                </a>
              </address>

            </div>

            <div>
              <h4 className="text-white text-xs font-semibold mb-5 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {["Inverter Sales", "Battery Sales", "Inverter Repair", "UPS Installation", "Emergency Service", "Doorstep Service"].map(s => (
                  <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold mb-5 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/about/story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/knowledge/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/knowledge/faqs" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/knowledge/buying-guide" className="hover:text-white transition-colors">Buying Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold mb-5 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:+919600571801" className="hover:text-white transition-colors flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400" />+91 9600571801</a></li>
                <li><a href="https://wa.me/919600571801" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><WhatsAppIcon size={16} className="text-[#25D366]" />WhatsApp</a></li>
                <li><a href="mailto:k7powersolution@gmail.com" className="hover:text-white transition-colors flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" />k7powersolution@gmail.com</a></li>
                <li className="text-slate-500 text-xs pt-1 flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />Puducherry, India</li>
                <li className="text-slate-500 text-xs">Mon–Sat: 9am–7pm · 24/7 Emergency</li>
              </ul>
            </div>
          </div>
          <div className="pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} K7 Power Solution. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}
