import Image from "next/image";

const Header = ({ buttonText, rsvpLink }: {
  buttonText: string;
  rsvpLink: string;
}) => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4">
      <div className="flex items-center justify-center m-2 gap-2">
        <Image src="/devfest-ogbomoso-logo.svg" alt="GDG Logo" width={200} height={32} />
        {/* <span className="font-bold">DevFest</span> */}
        {/* <span className="px-2 py-1 text-sm border rounded">Ogbomoso</span> */}
      </div>

      <div className="hidden md:flex items-center gap-8">
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
      <a href={rsvpLink} target="_blank">
      <button className="bg-[#FF9800] text-black px-4 py-2 rounded-full flex items-center gap-2">
      {buttonText} <span className="text-xl">🎟️</span>
      </button>
      </a>
    </nav>
  );
};

export default Header;
