import Head from "next/head";
import { useRouter } from "next/router";

type MetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  skipTitleFormatting?: boolean;
};

const MetaTags = ({
  title: pageTitle,
  description,
  keywords,
}: MetaTagsProps) => {
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://devfestogbomoso.com";
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={[
          "devfest ogbomoso",
          "ogbomoso devfest",
          "gdg ogbomoso",
          "gdg devfest",
          "devfest 2024",
          "ogbomoso",
          "ogbomoso devs",
          "gdg",
          "google developers group",
          "google devfest",
          keywords,
        ].join(",")}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={WEBSITE_URL} />

      {/* START TWITTER - OG */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={WEBSITE_URL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:desc" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:desc" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="GDG ogbomoso." />
      {/* END TWITTER - OG */}
    </>
  );
};

export default MetaTags;
