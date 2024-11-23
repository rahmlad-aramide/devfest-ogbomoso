/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScheduleSection from "./components/ScheduleSection";
import SpeakersSection from "./components/SpeakersSection";
import ThrowbackSection from "./components/ThrowbackSection";

export default function Home({ data }: any) {
  console.log(data);
  return (
    <>
      <Hero />
      <ThrowbackSection />
      <SpeakersSection />
      <ScheduleSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:3000/details.json");
  const data = {} // await res.json();
  return {
    props: {
      data,
    },
  };
}
