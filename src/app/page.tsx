"use client";

import Image from "next/image";
import EventRecap from "./components/home/event-recap";
import HomeHero from "./components/home/home-hero";
import SpeakerSection from "./components/home/speaker-section";
import SectionTitle from "./components/section-title";
import { ctaLinks, partners, sponsors } from "@/data";
import Link from "next/link";
import CommunityPartners from "./components/home/community-partners";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Schedule from "./components/schedule";

import mainVenue from "@public/venues/main-venue.jpg";


export default function Home() {
  return (
    <>
      <HomeHero />
      <EventRecap />
      <SpeakerSection />
      <section className="bg-[#C3ECF6] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Venue" size="lg" />

          <div className="mt-10 flex">
              <Image
                src={mainVenue}
                alt="conference-day-venue"
                className="w-full h-full flex flex-1"
              />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            as={Link}
            href={ctaLinks.register.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="!bg-[#33A852] !text-white hover:opacity-80 flex items-center gap-2"
          >
            Register Now <BsArrowUpRight />
          </Button>

        </div>
      </section>

      <section className="bg-[#CCF6C5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Sponsors" size="lg" />

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

          <div className="mt-10 flex justify-end">
            <Button
              as={Link}
              href={ctaLinks.sponsor.link}
              target="_blank"
              borderRadius={50}
              py={8}
              className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
            >
              Sponsor Us <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFE7A5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Partners" size="lg" />

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

          <div className="mt-10 flex justify-end">
            <Button
              as={Link}
              href={ctaLinks.partner.link}
              target="_blank"
              borderRadius={50}
              py={8}
              className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
            >
              Partner with Us <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <CommunityPartners />

      <Schedule />
    </>
  );
}
