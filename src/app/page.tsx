"use client";

import Image from "next/image";
import EventRecap from "./components/home/event-recap";
import HomeHero from "./components/home/home-hero";
import SpeakerSection from "./components/home/speaker-section";
import SectionTitle from "./components/section-title";
import { partners, sponsors } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHero />
      <EventRecap />
      <SpeakerSection />

      <section className="bg-[#CCF6C5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle
            title="Our sponsors and partners"
            smallFrameSize
            size="lg"
          />

          <div className="grid lg:grid-cols-4 gap-10 mt-10">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="border-4 border-[#1E1E1E] p-4 rounded-xl flex items-center bg-[#F0F0F0]"
              >
                <Image src={sponsor.img} key={index} alt={`sponsor-${index}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6 mt-10">
            {partners.map((partner, index) => (
              <Image
                src={partner.src}
                key={index}
                alt={`sponsor-${index}`}
                className={
                  index === 5
                    ? "w-[50px] lg:w-[80px]"
                    : "w-[110px] lg:w-[180px]"
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
