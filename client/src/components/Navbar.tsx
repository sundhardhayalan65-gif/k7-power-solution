import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Phone, Zap, Menu, X, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useState } from "react";
import { Link, useLocation } from "wouter";

interface MenuItem {
  title: string;
  description: string;
  href: string;
}

const products: MenuItem[] = [
  { title: "Inverters",       description: "Home and commercial inverters from top brands.",         href: "/products/inverters" },
  { title: "Batteries",       description: "Tubular and flat-plate batteries with warranty.",         href: "/products/batteries" },
  { title: "UPS Systems",     description: "Uninterrupted power for offices and server rooms.",       href: "/products/ups" },
  { title: "Accessories",     description: "Cables, stands, protection kits and more.",              href: "/products/accessories" },
];

const knowledge: MenuItem[] = [
  { title: "Blog",             description: "Tips and news on power backup solutions.",               href: "/knowledge/blog" },
  { title: "FAQs",             description: "Common questions about inverters and batteries.",        href: "/knowledge/faqs" },
  { title: "Buying Guide",     description: "Choose the right inverter and battery for your needs.", href: "/knowledge/buying-guide" },
  { title: "Maintenance Tips", description: "Keep your system running at peak performance.",          href: "/knowledge/maintenance" },
];

const about: MenuItem[] = [
  { title: "Our Story",     description: "15+ years of trusted service in Puducherry.", href: "/about/story" },
  { title: "Coverage Area", description: "Areas we serve across Puducherry.",           href: "/about/coverage" },
];

function DropdownItem({ title, description, href, onClick }: MenuItem & { onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick}>
      <NavigationMenuLink className="group flex items-start gap-3 rounded-lg p-3 no-underline outline-none transition-colors hover:bg-slate-50 cursor-pointer">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <div className="text-sm font-semibold text-gray-900 leading-tight">{title}</div>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{description}</p>
        </div>
      </NavigationMenuLink>
    </Link>
  );
}

const navLinkBase = "text-sm font-medium transition-colors px-3 py-2 rounded-md";
const navLinkLight = `${navLinkBase} text-gray-700 hover:text-blue-700 hover:bg-blue-50`;
const navLinkDark  = `${navLinkBase} text-white/90 hover:text-white hover:bg-white/10`;
const triggerLight = "text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 bg-transparent data-[state=open]:text-blue-700 data-[state=open]:bg-blue-50";
const triggerDark  = "text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 bg-transparent data-[state=open]:text-white data-[state=open]:bg-white/10";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [location] = useLocation();

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  const isLight = isScrolled || mobileOpen;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-700 text-white text-sm px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" aria-label="K7 Power Solution — Home">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center shadow-md shadow-blue-900/20 shrink-0">
              <Zap className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-base font-['Poppins'] transition-colors ${isLight ? "text-gray-900" : "text-white"}`}>
                K7 Power Solution
              </span>
              <span className={`text-[10px] font-medium transition-colors hidden sm:block ${isLight ? "text-gray-500" : "text-white/60"}`}>
                Complete Power Backup Solutions – Sales & Service
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">

              <NavigationMenuItem>
                <Link href="/">
                  <span className={isLight ? navLinkLight : navLinkDark}>Home</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/#services">
                  <span className={isLight ? navLinkLight : navLinkDark}>Services</span>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={isLight ? triggerLight : triggerDark}
                  aria-label="Products menu"
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[460px] p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {products.map((item) => <DropdownItem key={item.title} {...item} />)}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={isLight ? triggerLight : triggerDark}
                  aria-label="Knowledge menu"
                >
                  Knowledge
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[460px] p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {knowledge.map((item) => <DropdownItem key={item.title} {...item} />)}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={isLight ? triggerLight : triggerDark}
                  aria-label="About menu"
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[460px] p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {about.map((item) => <DropdownItem key={item.title} {...item} />)}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <span className={isLight ? navLinkLight : navLinkDark}>Contact</span>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+919600571801" aria-label="Call K7 Power Solution">
            <Button
              variant="outline"
              size="sm"
              className={`gap-1.5 font-medium ${!isLight ? "border-white/30 text-white hover:bg-white/10 hover:text-white" : ""}`}
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              Call Now
            </Button>
          </a>
          <a
            href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp K7 Power Solution"
          >
            <Button size="sm" className="bg-[#25D366] hover:bg-[#20bd5a] text-white gap-1.5 font-medium shadow-sm hover:scale-[1.03] transition-transform">
              <WhatsAppIcon size={14} className="text-white" />
              WhatsApp Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${!isLight ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" role="dialog" aria-label="Navigation menu" className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">

            <Link href="/" onClick={closeMenu}>
              <span className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">Home</span>
            </Link>
            <a href="/#services" onClick={closeMenu} className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50">Services</a>

            {[
              { label: "Products",  items: products },
              { label: "Knowledge", items: knowledge },
              { label: "About",     items: about },
            ].map(({ label, items }) => (
              <div key={label}>
                <button
                  onClick={() => setOpenSection((s) => (s === label ? null : label))}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50"
                  aria-expanded={openSection === label}
                >
                  {label}
                  <ChevronRight
                    className={`w-4 h-4 text-gray-400 transition-transform ${openSection === label ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {openSection === label && (
                  <div className="ml-4 mt-1 space-y-0.5 pb-1">
                    {items.map((item) => (
                      <Link key={item.title} href={item.href} onClick={closeMenu}>
                        <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer">
                          <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" aria-hidden="true" />
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/contact" onClick={closeMenu}>
              <span className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-50 cursor-pointer">Contact</span>
            </Link>

            <div className="flex gap-2 pt-3 pb-1">
              <a href="tel:+919600571801" className="flex-1" aria-label="Call us">
                <Button variant="outline" size="sm" className="w-full gap-2 font-medium">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" /> Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/919600571801?text=Hi%2C%20I%20need%20help%20with%20my%20inverter%2Fbattery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
              >
                <Button size="sm" className="bg-[#25D366] hover:bg-[#20bd5a] gap-1.5 font-medium text-white">
                  <WhatsAppIcon size={14} className="text-white" /> WhatsApp Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
