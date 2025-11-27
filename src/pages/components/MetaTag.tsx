type MetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  skipTitleFormatting?: boolean;
};

const MetaTags = ({
  title,
  description,
  image,
  keywords,
}: MetaTagsProps) => {
  const WEBSITE_URL = process.env.WEBSITE_URL || "https://devfestogbomoso.com";
  const OG_IMAGE = image || `${WEBSITE_URL}/og-image.jpg`;
  
  return (
    <>
      <title>{title!}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={[
          "devfest ogbomoso",
          "ogbomoso devfest",
          "gdg ogbomoso",
          "gdg devfest",
          "devfest 2025",
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
      
      {/* TWITTER - OG */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={WEBSITE_URL} />
      <meta name="twitter:title" content={title!} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      
      <meta property="og:title" content={title!} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={WEBSITE_URL} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="GDG Ogbomoso" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title!} />
    </>
  );
};

export default MetaTags;
