import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { useState } from "react";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build a WhatsApp message from the form and open it
    const text = `Hi K7 Power Solution,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService needed: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919600571801?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Contact K7 Power Solution | Inverter & Battery Service Puducherry | +91 9600571801"
        description="Contact K7 Power Solution in Puducherry for inverter sales, battery replacement or emergency repair. Call or WhatsApp +91 9600571801. Same-day service available."
        keywords="contact inverter dealer Puducherry, inverter repair contact Puducherry, battery service Puducherry phone, K7 Power Solution contact"
        canonical="https://k7powersolution.in/contact"
        breadcrumbs={[
          { name: "Home", url: "https://k7powersolution.in/" },
          { name: "Contact", url: "https://k7powersolution.in/contact" },
        ]}
      />
      <Navbar isScrolled={true} />

      {/* ─── HERO STRIP ───────────────────────────────────────────── */}
      <div className="bg-[#0f172a] pt-24 pb-12" id="main-content">
        <div className="container max-w-5xl mx-auto">
          <span className="section-label !text-blue-400 before:bg-blue-400 mb-3">Get in Touch</span>
          <h1 className="text-white mt-3 mb-3">Contact K7 Power Solution</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Call, WhatsApp, or fill in the form — we respond within 30 minutes.
            Same-day service available across Puducherry.
          </p>
          {/* Trust line */}
          <div className="flex items-center gap-2 mt-5">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-sm text-slate-400 font-medium">15+ Years Trusted Service in Puducherry</span>
          </div>
        </div>
      </div>

      {/* ─── QUICK ACTION BAR ─────────────────────────────────────── */}
      <div className="bg-blue-700 sticky top-16 z-30">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-blue-600">
            <a
              href="tel:+919600571801"
              className="flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold hover:bg-blue-600 transition-colors flex-1 text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-200 font-normal">Click to call</div>
                <div>+91 9600571801</div>
              </div>
            </a>
            <a
              href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold hover:bg-blue-600 transition-colors flex-1 text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon size={18} className="text-[#25D366]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-200 font-normal">Message us</div>
                <div>WhatsApp Us Now</div>
              </div>
            </a>
            <div className="flex items-center justify-center gap-3 py-4 px-6 text-white flex-1 text-sm">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-200 font-normal">Working hours</div>
                <div>Mon–Sat 9am–7pm · 24/7 Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}
      <div className="py-16">
        <div className="container max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* LEFT — Business Details + Map */}
            <div className="lg:col-span-2 space-y-6">

              {/* Business Details Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                <div className="bg-blue-700 px-6 py-4">
                  <h2 className="text-white font-bold text-base font-['Poppins']">K7 Power Solution</h2>
                  <p className="text-blue-200 text-xs mt-0.5">Inverter & Battery Dealer — Puducherry</p>
                </div>

                <div className="p-5 space-y-4">
                  {/* Click to Call */}
                  <a
                    href="tel:+919600571801"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Click to call</div>
                      <div className="text-sm font-bold text-blue-700">+91 9600571801</div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                      <WhatsAppIcon size={20} className="text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Message us instantly</div>
                      <div className="text-sm font-bold text-green-700">WhatsApp Now</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:k7powersolution@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Email us</div>
                      <div className="text-sm font-bold text-blue-700">k7powersolution@gmail.com</div>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Location</div>
                      <div className="text-sm font-semibold text-gray-800">Puducherry, India — 605001</div>
                      <div className="text-xs text-gray-500 mt-0.5">Serving all areas of Puducherry</div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Hours</div>
                      <div className="text-sm font-semibold text-gray-800">Mon – Sat: 9:00am – 7:00pm</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-semibold text-green-700">Emergency line open 24/7</span>
                      </div>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-orange-50 border border-orange-100">
                    <AlertCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <p className="text-xs text-orange-700 font-medium">We respond to all enquiries within 30 minutes</p>
                  </div>
                </div>
              </div>

              {/* What we cover */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Services Available</h3>
                <div className="space-y-2">
                  {[
                    "Inverter sales & installation",
                    "Battery sales & replacement",
                    "Inverter repair & servicing",
                    "UPS installation",
                    "24/7 emergency callout",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form + Map */}
            <div className="lg:col-span-3 space-y-6">

              {/* Contact Form */}
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1 font-['Poppins']">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill in the form below — it opens directly in WhatsApp so we can reply instantly.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Message Sent via WhatsApp!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">We'll reply within 30 minutes. You can also call us directly at +91 9600571801.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 text-sm text-blue-700 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          className={inputClass}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9600 000 000"
                          className={inputClass}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        What do you need help with?
                      </label>
                      <select
                        className={inputClass}
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">Select a service...</option>
                        <option>Inverter — Buy New</option>
                        <option>Battery — Buy New</option>
                        <option>Inverter Repair</option>
                        <option>Battery Replacement</option>
                        <option>UPS Installation</option>
                        <option>Emergency Service</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Tell us more (optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your issue or requirement — e.g. brand, model, area in Puducherry..."
                        className={inputClass}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <Button
                        type="submit"
                        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white h-12 font-bold gap-2 text-base shadow-md shadow-green-900/20"
                      >
                        <WhatsAppIcon size={20} className="text-white" />
                        Send via WhatsApp
                      </Button>
                      <a href="tel:+919600571801" className="flex-1">
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full h-12 font-semibold gap-2 text-base border-gray-200"
                        >
                          <Phone className="w-5 h-5" />
                          Call Instead
                        </Button>
                      </a>
                    </div>

                    <p className="text-xs text-gray-400 text-center pt-1">
                      No spam. Your details are only used to contact you about your enquiry.
                    </p>
                  </form>
                )}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="bg-slate-50 border-b border-gray-100 px-5 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-700" />
                  <span className="text-sm font-semibold text-gray-700">Find Us — Puducherry, India</span>
                </div>
                <iframe
                  title="K7 Power Solution location — Puducherry"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62682.82256372327!2d79.77081074999999!3d11.9415665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536132e6c7c3fd%3A0xb6d1e9e4cd3e6bef!2sPuducherry%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps showing K7 Power Solution service area in Puducherry"
                />
                <a
                  href="https://maps.google.com/?q=Puducherry,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-slate-50 border-t border-gray-100 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
      <MobileCTA />
    </div>
  );
}
