import Image from "next/image"
import { Phone, X } from "lucide-react"
import { useEffect, useState } from "react"

const Header = ({ buttonText, rsvpLink }: { buttonText: string; rsvpLink: string }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openSupport, setOpenSupport] = useState<boolean>(false)

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768)

    checkDevice()

    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4">
      <div className="flex items-center justify-center m-2 gap-2">
        <Image
          src="/devfedt-logo-white.png"
          alt="GDG Logo"
          width={isMobile ? 100 : 200}
          height={isMobile ? 20 : 32}
        />
        {/* <span className="font-bold">DevFest</span> */}
        {/* <span className="px-2 py-1 text-sm border rounded">Ogbomoso</span> */}
      </div>

      <div className="flex items-center gap-[10px] lg:gap-[70px]">
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#speakers" className="hover:text-white">
            Speakers
          </a>
          <a href="#schedule" className="hover:text-white">
            Schedule
          </a>
          <a href="#faqs" className="hover:text-white">
            FAQs
          </a>
        </div>
        <div
          onClick={() => setOpenSupport(!openSupport)}
          className="lg:flex items-center gap-2 hidden relative cursor-pointer"
        >
          <Phone className="w-5 h-5" />
          <span className="">Contact Support</span>
          <div
            className={`absolute top-7 w-[200px] h-[180px] rounded-md transition-all duration-500 ease-in-out ${
              openSupport ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ListOfSupporters />
          </div>
        </div>
        <a href={rsvpLink} target="_blank">
          <button className="bg-[#FF9800] text-[12px] lg:text-[16px] text-white px-4 py-2 rounded flex items-center gap-2">
            {buttonText} <span className="text-xl">🎟️</span>
          </button>
        </a>
      </div>
    </nav>
  )
}

const ListOfSupporters = () => {
  return (
    <div className="w-full h-full bg-white rounded-md p-3 relative">
      <X className="w-4 h-4 absolute right-1 top-4 text-gray-500 hover:text-rose-500 transition-all duration-300 ease-in-out" />
      <h1 className="text-[14px] text-gray-500">Call these numbers:</h1>
      <div className="flex flex-col gap-2 text-gray-700 mt-2">
        <a
          href="tel:+2347062976379
"
        >
          +2347062976379
        </a>
        <a
          href="tel:+2348109711209
"
        >
          +2348109711209
        </a>
        <a
          href="tel:+2348104642364
"
        >
          +2348104642364
        </a>
        <a
          href="tel:+2349023600083
"
        >
          +2349023600083
        </a>
      </div>
    </div>
  )
}

export default Header
