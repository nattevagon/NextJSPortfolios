import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Natte Vagon Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta
          name="description"
          content="Natte Vagon Profile Web for Portfolios"
        />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
