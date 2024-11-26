import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "./components/MetaTag";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=yes"
        />
        <title>DevFest Ogbomoso</title>
        <MetaTags
          title={"DevFest Ogbomoso"}
          description={
            "DevFest Ogbomoso is a community-run, developer event that offers speaker sessions across multiple product areas, codelabs, hackathon, and more."
          }
        />
        <meta name="theme-color" content="#FF9800" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
