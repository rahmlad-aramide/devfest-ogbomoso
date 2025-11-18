/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Header from "./components/Header";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTag";
import ReferralStats from "./components/RefferalStats";

export default function Referrals({ data }: any) {
  return (
    <>
      <MetaTags
        title="Your Referrals - DevFest Ogbomoso"
        description="Track your DevFest Ogbomoso referrals and impact"
      />
      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />
      <ReferralStats />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.devfestogbomoso.com";
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
