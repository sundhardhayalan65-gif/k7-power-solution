import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with K7 Power Solution on WhatsApp"
      className="fixed bottom-24 right-5 z-50 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-900/30 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      <WhatsAppIcon size={26} className="text-white relative z-10" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat on WhatsApp
        <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
      </span>
    </a>
  );
}
