import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "./components/MetaTag";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-raleway",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6, user-scalable=yes"
        />
        <title>DevFest Ogbomoso</title>
        <MetaTags
          title="DevFest Ogbomoso"
          description={
            "DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
          }
        />
        <meta name="theme-color" content="#FF9800" />
        {/* <!-- HTML Meta Tags --> */}
        <title>DevFest Ogbomoso</title>
        <meta
          name="description"
          content="DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://devfestogbomoso.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DevFest Ogbomoso" />
        <meta
          property="og:description"
          content="DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
        />
        <meta property="og:image" content="/Cover.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devfestogbomoso.com" />
        <meta property="twitter:url" content="https://devfestogbomoso.com/" />
        <meta name="twitter:title" content="DevFest Ogbomoso" />
        <meta
          name="twitter:description"
          content="DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
        />
        <meta name="twitter:image" content="/Cover.png" />
      </Head>

      <main className={`${raleway.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
