import Image from "next/image";

import {
  Phone,
  X,
  Menu,
  ChevronDown,
  Users,
  Clock,
  HelpCircle,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface HeaderProps {
  buttonText: string;
  rsvpLink: string;
}

const Header = ({ buttonText, rsvpLink }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openSupport, setOpenSupport] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const supportRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    // Handle click outside to close dropdowns
    const handleClickOutside = (event: MouseEvent) => {
      if (
        supportRef.current &&
        !supportRef.current.contains(event.target as Node)
      ) {
        setOpenSupport(false);
      }
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 250);
    } else {
      setIsMenuOpen(true);
    }
  };

  const navItems = [
    { href: "#", label: "Home", icon: <Menu className="w-4 h-4" /> },
    {
      href: "#speakers",
      label: "Speakers",
      icon: <Users className="w-4 h-4" />,
    },
    {
      href: "#schedule",
      label: "Schedule",
      icon: <Clock className="w-4 h-4" />,
    },
    { href: "#faqs", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out font-sans ${
        isScrolled
          ? "bg-black/10 backdrop-blur-xl shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/devfedt-logo-white.png"
              alt="GDG Logo"
              width={isMobile ? 100 : 130}
              height={isMobile ? 24 : 30}
              className="transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white/90 hover:text-white transition-all duration-300 font-medium text-sm lg:text-base px-5 py-2.5 rounded-full 
bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden
before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]
hover:before:bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.4),transparent_60%)]
before:transition-all before:duration-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9800] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Support Dropdown */}
            <div className="relative" ref={supportRef}>
              <button
                onClick={() => setOpenSupport(!openSupport)}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-200 font-medium text-sm lg:text-base group"
              >
                <Phone className="w-4 h-4" />
                <span>Support</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    openSupport ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSupport && (
                <div className="absolute top-full right-0 mt-3 w-56 backdrop-blur-xl rounded-lg shadow-xl animate-in fade-in-50 duration-200 overflow-hidden">
                  <ListOfSupporters onClose={() => setOpenSupport(false)} />
                </div>
              )}
            </div>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* RSVP Button */}
            <a
              href="https://tinyurl.com/devfestogbo2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <button className="bg-[#FF9800] hover:bg-[#E68900] text-white hover:text-white px-4 lg:px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg">
                {buttonText}
              </button>
            </a>

            {/* Mobile Menu Button - Centered properly */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#FF9800] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-center">
                <span
                  className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100 translate-y-0"
                  }`}
                />
                <span
                  className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Professional with Glassmorphism */}
        {(isMenuOpen || isAnimating) && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 ${
              isMenuOpen && !isAnimating
                ? "animate-in fade-in-50 slide-in-from-top-4 duration-300"
                : "animate-out fade-out-50 slide-out-to-top-4 duration-250"
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={toggleMenu}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="text-[#FF9800] opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className="flex-1 text-sm">{item.label}</span>
                    <span className="w-1 h-1 bg-[#FF9800] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}

                {/* Mobile Support */}
                <div className="pt-2 border-t border-white/10 mt-2">
                  <button
                    onClick={() => setOpenSupport(!openSupport)}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-200 font-medium w-full text-left py-3 px-4 rounded-lg hover:bg-white/5 group"
                  >
                    <Phone className="w-4 h-4 text-[#FF9800] opacity-80 group-hover:opacity-100" />
                    <span className="flex-1 text-sm">Contact Support</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openSupport ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openSupport && (
                    <div className="mt-2 ml-7 bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 overflow-hidden">
                      <ListOfSupporters onClose={() => setOpenSupport(false)} />
                    </div>
                  )}
                </div>

                {/* Mobile RSVP Button */}
                <a
                  href="https://tinyurl.com/devfestogbo2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <button className="w-full bg-[#FF9800] hover:bg-[#E68900] text-white py-2.5 rounded-lg transition-all duration-300 text-sm font-medium shadow-md">
                    {buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface ListOfSupportersProps {
  onClose: () => void;
}

const ListOfSupporters = ({ onClose }: ListOfSupportersProps) => {
  const phoneNumbers = [
    "+2347062976379",
    "+2348109711209",
    "+2348104642364",
    "+2349023600083",
  ];

  return (
    <div className="w-full bg-white/10 backdrop-blur-xl p-3 relative border border-white/20">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 p-1 text-white/70 hover:text-white transition-colors duration-200"
      >
        <X className="w-3 h-3" />
      </button>

      <h3 className="text-xs font-semibold text-white/80 mb-2 uppercase tracking-wide">
        Support Team
      </h3>

      <div className="space-y-1.5">
        {phoneNumbers.map((number) => (
          <a
            key={number}
            href={`tel:${number}`}
            className="block text-xs text-white/90 hover:text-[#FF9800] transition-colors duration-200 p-1.5 rounded"
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
