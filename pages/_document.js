import Footer from "../components/footer";
import { Toolbar } from "../components/toolbar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap'
          rel='stylesheet'></link>
        <title>Zack's Web Solutions</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
