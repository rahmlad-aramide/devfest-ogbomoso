import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "./components/MetaTag";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://devfestogbomoso.com";

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6, user-scalable=yes"
        />
        <meta name="theme-color" content="#FF9800" />
      </Head>
      <MetaTags
        title="DevFest Ogbomoso"
        description="DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
        image={`${WEBSITE_URL}/og-image.png`}
      />
      <main className={`${raleway.variable} ${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
