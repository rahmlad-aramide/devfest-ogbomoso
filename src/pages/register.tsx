/* eslint-disable @typescript-eslint/no-explicit-any */
import { StepForm } from "./components/StepForm/StepForm";
import MetaTags from "./components/MetaTag";

export default function Register() {
  return (
    <div className="h-screen bg-white text-black">
      <MetaTags
        title="Register for DevFest Ogbomoso"
        description="Join us at DevFest Ogbomoso 2024 - Register now!"
      />
      <StepForm />
    </div>
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
