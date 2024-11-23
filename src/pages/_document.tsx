import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* START META */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="robots"
          content={
            process.env.NODE_ENV !== "development"
              ? "index,follow"
              : "noindex,nofollow"
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NODE_ENV !== "development"
              ? "index,follow"
              : "noindex,nofollow"
          }
        />
        <meta name="author" content="Feranmi Adeniji" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta httpEquiv="Window-Target" content="_value" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Moniepoint Inc." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Moniepoint Inc." />
        {/* END META */}
        <link rel="manifest" href="/manifest.json" />
        <link href="/icon.svg" rel="icon" type="image/svg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/icon.svg"></link>
        <meta name="theme-color" content="#0357EE" />
        <meta name="msapplication-TileColor" content="#0357EE" />
        <link rel="mask-icon" href="/icon.svg" color="#0357EE" />
      </Head>
      <body>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
