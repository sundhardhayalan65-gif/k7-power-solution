import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function MobileCTA() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
        <a href="tel:+919600571801" className="flex-1">
          <Button variant="outline" className="w-full gap-2 font-semibold h-11 border-gray-300">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </a>
        <a
          href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full gap-2 font-bold h-11 bg-[#25D366] hover:bg-[#20bd5a] text-white hover:scale-[1.02] transition-transform">
            <WhatsAppIcon size={18} className="text-white" />
            WhatsApp Now
          </Button>
        </a>
      </div>
      {/* Spacer so content isn't hidden behind the bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
