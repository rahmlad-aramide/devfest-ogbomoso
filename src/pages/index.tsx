"use client";
import DPSection from "./components/DPSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScheduleSection from "./components/ScheduleSection";
import SpeakersSection from "./components/SpeakersSection";
import ThrowbackSection from "./components/ThrowbackSection";
import TeamSection from "./components/TeamSection";
import SponsorScroll from "./components/SponsorScroll";

export default function Home({ data }: any) {
  return (
    <>
      <Hero data={data} />
      {data?.throwback.show && <ThrowbackSection data={data?.throwback} />}
      <SponsorScroll />
      <SpeakersSection data={data} />
      <TeamSection data={data} />
      <SponsorScroll />
      <ScheduleSection data={data} suppressHydrationWarning />
      <DPSection />
      <SponsorScroll />
      <FAQSection data={data} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://devfest-ogbomoso.vercel.app";
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
