import Footer from "../components/footer";
import { Toolbar } from "../components/toolbar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Zack's Web Solutions providing solutions for the web"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Zack's Web Solutions</title>
      </Head>
      <Toolbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
