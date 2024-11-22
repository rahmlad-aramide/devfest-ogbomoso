import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import SectionTitle from "@component/section-title";
import SpeakersCard from "@component/speakers-card";
import { ctaLinks, speakers } from "@/data";
import { Speaker } from "@/types";
import { usePathname } from "next/navigation";

export default function SpeakerSection() {
  const pathname = usePathname();
  const featuredSpeakers = [
    speakers.find((speaker) => speaker.name === "Jamiu Okanlawon"),
    speakers.find((speaker) => speaker.name === "Elizabeth Alli"),
    speakers.find((speaker) => speaker.name === "Dára Sọ́balójú"),
  ] as Speaker[];

  return (
    <section className="bg-[#F0F0F0] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle
          title={"Our speakers" }
          smallFrameSize={false}
          size="lg"
        />

          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {featuredSpeakers.slice(0, 3).map((speaker, index) => (
              <SpeakersCard {...speaker} key={index} />
            ))}
          </div>

       
          <div className="mt-10 flex items-center gap-4 justify-center lg:justify-end">
            <Button
              as={Link}
              href=""
              target="_blank"
              variant="outline"
              borderRadius={50}
              py={8}
              className="border !border-primary-body !text-primary-body hover:opacity-80"
            >
              Buy Ticket
            </Button>

            <Button
              as={Link}
              href="/speakers"
              borderRadius={50}
              py={8}
              className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
            >
              View All <BsArrowUpRight />
            </Button>
          </div>
      </div>
    </section>
  );
}
