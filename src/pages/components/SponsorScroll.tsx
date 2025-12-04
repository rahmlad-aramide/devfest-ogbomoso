import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

// Sample sponsor data - Replace with actual sponsor logos
const sponsors: Sponsor[] = [
  { id: 1, name: "GDG On Campus Lautech", logo: "/partners/gdgoc.jpg" },
  {
    id: 2,
    name: "Oluseun Onigbinde Resource Center",
    logo: "/partners/orc.png",
  },
  { id: 3, name: "Flutter Ogbomoso", logo: "/partners/flutterogb.png" },
  { id: 4, name: "Google", logo: "/partners/google.png" },
  { id: 5, name: "GDG Ogbomoso", logo: "/partners/gdgogb.png" },
];

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  return (
    <div className="flex-shrink-0 w-64 h-40 mx-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
      <div className="relative w-32 h-32">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain h-full w-full"
        />
      </div>
      {/* <h3 className="text-lg font-bold text-[#1e1e1e] text-center">
        {sponsor.name}
      </h3> */}
    </div>
  );
};

const SponsorScroll: React.FC = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setScrollPosition1((prev) => {
          const speed = 1;
          const newPos = prev + speed;

          // Reset position for infinite scroll
          const cardWidth = 288; // 256px width + 32px margin
          const totalWidth = cardWidth * sponsors.length;

          if (newPos >= totalWidth) {
            return 0;
          }

          return newPos;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="w-full bg-yellow relative overflow-hidden">
      {/* Background Decorations matching DevFest style */}
      {/* <Image
        src="/Bold-glyphs.png"
        alt="Background Decoration"
        fill
        className="object-cover opacity-20 blur-sm"
      /> */}

      {/* <div className="container mx-auto px-4 mb-12 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#1e1e1e] mb-3">
          Our Sponsors & Partners
        </h2>
        <p className="text-center text-[#1e1e1e]/70 font-semibold">
          Supporting innovation and community growth
        </p>
      </div> */}
      <div
        ref={scrollRef}
        className="space-y-6 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition1}px)`,
              willChange: "transform",
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <SponsorCard
                key={`row1-${sponsor.id}-${index}`}
                sponsor={sponsor}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-8 relative z-10">
        <p className="text-sm text-[#1e1e1e]/60 font-semibold">
          {isPaused
            ? "⏸️ Paused - Hover to pause scrolling"
            : "▶️ Auto-scrolling"}
        </p>
      </div> */}
    </div>
  );
};

export default SponsorScroll;
