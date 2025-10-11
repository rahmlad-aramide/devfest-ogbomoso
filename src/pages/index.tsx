
"use client";
import DPSection from "./components/DPSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScheduleSection from "./components/ScheduleSection";
import SpeakersSection from "./components/SpeakersSection";
import ThrowbackSection from "./components/ThrowbackSection";

export default function Home({ data }: any) {
  return (
    <>
      <Hero data={data} />
      {data?.throwback.show && <ThrowbackSection data={data?.throwback} />}
      <SpeakersSection data={data} />
      <ScheduleSection data={data} suppressHydrationWarning />
      <DPSection />

      <FAQSection data={data} />
      <Footer data={data} />

    </>
  );
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://devfest-ogbomoso.vercel.app";
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
