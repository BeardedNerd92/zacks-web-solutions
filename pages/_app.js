import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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

      <Toolbar />

      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
        crossOrigin='anonymous'></script>
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
