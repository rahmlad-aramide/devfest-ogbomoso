import {
  Phone,
  X,
  ChevronDown,
  Users,
  Clock,
  HelpCircle,
  Menu,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import RSVPModal from "./RSVPModal";

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
  const [isOnWhiteBg, setIsOnWhiteBg] = useState<boolean>(false);
  const [showRSVPModal, setShowRSVPModal] = useState<boolean>(false);

  const supportRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const headerHeight = 80;
      const sections = document.querySelectorAll("section, div[data-bg]");
      let onWhite = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const [r, g, b] = rgb.map(Number);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            if (brightness > 200) {
              onWhite = true;
            }
          }
        }
      });

      setIsOnWhiteBg(onWhite);
    };

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
    handleScroll();
    window.addEventListener("resize", checkDevice);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (showRSVPModal) {
      // Prevent background scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showRSVPModal]);

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
    { href: "/#", label: "Home", icon: <Menu className="w-4 h-4" /> },
    {
      href: "/#speakers",
      label: "Speakers",
      icon: <Users className="w-4 h-4" />,
    },
    {
      href: "/#team",
      label: "Team",
      icon: <Users className="w-4 h-4" />,
    },
    {
      href: "/#schedule",
      label: "Schedule",
      icon: <Clock className="w-4 h-4" />,
    },
    { href: "/#faqs", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out font-sans ${
        isScrolled
          ? isOnWhiteBg
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200 py-3"
            : "bg-black/10 backdrop-blur-xl shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={
                isScrolled
                  ? isOnWhiteBg
                    ? "/devfest-ogbomoso-logo.svg"
                    : "/devfedt-logo-white.png"
                  : "/devfedt-logo-white.png"
              }
              alt="GDG Logo"
              width={isMobile ? 100 : 130}
              height={isMobile ? 24 : 30}
              className="transition-all duration-300 hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative transition-all duration-300 font-medium text-sm lg:text-base px-5 py-2.5 rounded-full backdrop-blur-md border-2 overflow-hidden
                  ${
                    isOnWhiteBg && isScrolled
                      ? "text-gray-800 hover:text-gray-900 bg-gray-100/80 border-gray-300 before:bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent_60%)] hover:before:bg-[radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.15),transparent_60%)]"
                      : "text-white/90 hover:text-white bg-white/10 border-white/20 before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)] hover:before:bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.4),transparent_60%)]"
                  }
                  before:absolute before:inset-0 before:transition-all before:duration-700`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9800] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="relative" ref={supportRef}>
              <button
                onClick={() => setOpenSupport(!openSupport)}
                className={`flex items-center gap-2 transition-all duration-200 font-medium text-sm lg:text-base group ${
                  isOnWhiteBg && isScrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
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
                <div
                  className={`absolute top-full right-0 mt-3 w-56 backdrop-blur-xl rounded-lg shadow-xl animate-in fade-in-50 duration-200 overflow-hidden ${
                    isOnWhiteBg && isScrolled
                      ? "bg-white/95 border border-gray-200"
                      : "bg-black/80 border border-white/10"
                  }`}
                >
                  <ListOfSupporters
                    onClose={() => setOpenSupport(false)}
                    isOnWhiteBg={isOnWhiteBg && isScrolled}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowRSVPModal(true)}
              className="hidden sm:block bg-[#FF9800] hover:bg-[#E68900] text-white hover:text-white px-4 lg:px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            >
              {buttonText}
            </button>

            <button
              onClick={toggleMenu}
              className={`md:hidden flex items-center justify-center w-10 h-10 hover:text-[#FF9800] transition-colors duration-200 ${
                isOnWhiteBg && isScrolled ? "text-gray-800" : "text-white"
              }`}
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

        {(isMenuOpen || isAnimating) && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-t ${
              isOnWhiteBg && isScrolled
                ? "bg-white/95 border-gray-200"
                : "bg-black/80 border-white/10"
            } ${
              isMenuOpen && !isAnimating
                ? "animate-in fade-in-50 slide-in-from-top-4 duration-300"
                : "animate-out fade-out-50 slide-out-to-top-4 duration-250"
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={toggleMenu}
                    className={`flex items-center gap-3 transition-all duration-200 font-medium py-3 px-4 rounded-lg group ${
                      isOnWhiteBg && isScrolled
                        ? "text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-[#FF9800] opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className="flex-1 text-sm">{item.label}</span>
                    <span className="w-1 h-1 bg-[#FF9800] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}

                <div
                  className={`pt-2 border-t mt-2 ${
                    isOnWhiteBg && isScrolled
                      ? "border-gray-200"
                      : "border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenSupport(!openSupport)}
                    className={`flex items-center gap-3 transition-all duration-200 font-medium w-full text-left py-3 px-4 rounded-lg group ${
                      isOnWhiteBg && isScrolled
                        ? "text-gray-800 hover:text-gray-900 hover:bg-gray-100"
                        : "text-white/90 hover:text-white hover:bg-white/5"
                    }`}
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
                    <div
                      className={`mt-2 ml-7 backdrop-blur-xl rounded-lg border overflow-hidden ${
                        isOnWhiteBg && isScrolled
                          ? "bg-gray-50 border-gray-200"
                          : "bg-white/10 border-white/20"
                      }`}
                    >
                      <ListOfSupporters
                        onClose={() => setOpenSupport(false)}
                        isOnWhiteBg={isOnWhiteBg && isScrolled}
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setShowRSVPModal(true);
                    toggleMenu();
                  }}
                  className="mt-3 w-full bg-[#FF9800] hover:bg-[#E68900] text-white py-2.5 rounded-lg transition-all duration-300 text-sm font-medium shadow-md"
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RSVP Modal */}
      {showRSVPModal && (
        <RSVPModal
          isOpen={showRSVPModal}
          onClose={() => setShowRSVPModal(false)}
          eventType="devfest"
        />
      )}
    </nav>
  );
};

interface ListOfSupportersProps {
  onClose: () => void;
  isOnWhiteBg?: boolean;
}

const ListOfSupporters = ({
  onClose,
  isOnWhiteBg = false,
}: ListOfSupportersProps) => {
  const phoneNumbers = [
    "+2347062976379",
    "+2348109711209",
    "+2348104642364",
    "+2349023600083",
  ];

  return (
    <div
      className={`w-full backdrop-blur-xl p-3 relative border ${
        isOnWhiteBg
          ? "bg-white/95 border-gray-200"
          : "bg-white/10 border-white/20"
      }`}
    >
      <button
        onClick={onClose}
        className={`absolute right-2 top-2 p-1 transition-colors duration-200 ${
          isOnWhiteBg
            ? "text-gray-600 hover:text-gray-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        <X className="w-3 h-3" />
      </button>

      <h3
        className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
          isOnWhiteBg ? "text-gray-700" : "text-white/80"
        }`}
      >
        Support Team
      </h3>

      <div className="space-y-1.5">
        {phoneNumbers.map((number) => (
          <Link
            key={number}
            href={`tel:${number}`}
            className={`block text-xs transition-colors duration-200 p-1.5 rounded ${
              isOnWhiteBg
                ? "text-gray-700 hover:text-[#FF9800]"
                : "text-white/90 hover:text-[#FF9800]"
            }`}
          >
            {number}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
