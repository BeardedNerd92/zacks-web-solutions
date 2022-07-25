import Footer from "../components/footer";
import { Toolbar } from "../components/toolbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Toolbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
