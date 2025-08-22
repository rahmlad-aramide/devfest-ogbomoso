import Image from "next/image"
import { Phone, X, Menu, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface HeaderProps {
  buttonText: string
  rsvpLink: string
}

const Header = ({ buttonText, rsvpLink }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openSupport, setOpenSupport] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    checkDevice()
    window.addEventListener("resize", checkDevice)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkDevice)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#speakers", label: "Speakers" },
    { href: "#schedule", label: "Schedule" },
    { href: "#faqs", label: "FAQs" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? "bg-black/20 backdrop-blur-xl shadow-lg border-b border-white/10 py-3" 
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/devfedt-logo-white.png"
              alt="GDG Logo"
              width={isMobile ? 100 : 140}
              height={isMobile ? 24 : 32}
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9800] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenSupport(!openSupport)}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base group"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Support</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSupport ? "rotate-180" : ""}`} />
              </button>
              
              {openSupport && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20">
                  <ListOfSupporters onClose={() => setOpenSupport(false)} />
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href={rsvpLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#FF9800] hover:bg-[#E68900] text-white px-3 lg:px-6 py-1.5 lg:py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl backdrop-blur-sm">
                {buttonText} 
                <span className="text-lg">🎟️</span>
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#FF9800] transition-colors duration-200 backdrop-blur-sm rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 backdrop-blur-xl rounded-lg p-6 border border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-white transition-colors duration-200 font-medium py-2 border-b border-white/10 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Support */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => setOpenSupport(!openSupport)}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 font-medium w-full text-left py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Support</span>
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-200 ${openSupport ? "rotate-180" : ""}`} />
                </button>
                
                {openSupport && (
                  <div className="mt-3 pl-6">
                    <ListOfSupporters onClose={() => setOpenSupport(false)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

interface ListOfSupportersProps {
  onClose: () => void
}

const ListOfSupporters = ({ onClose }: ListOfSupportersProps) => {
  const phoneNumbers = [
    "+2347062976379",
    "+2348109711209", 
    "+2348104642364",
    "+2349023600083"
  ]

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-lg p-4 relative border border-white/20 shadow-xl">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 p-1 text-gray-500 hover:text-rose-500 transition-colors duration-200 backdrop-blur-sm rounded-full"
      >
        <X className="w-4 h-4" />
      </button>
      
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Call Support:</h3>
      
      <div className="space-y-2">
        {phoneNumbers.map((number) => (
          <a
            key={number}
            href={`tel:${number}`}
            className="block text-sm text-gray-600 hover:text-[#FF9800] transition-colors duration-200 p-2 rounded-md hover:bg-gray-50/50 backdrop-blur-sm"
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Header