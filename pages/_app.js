import "../styles/globals.css";
import Banner from "../coms/Banner/Banner";
import Nav from "../coms/Nav/Nav";

import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content="ioe21weq keywords" />
      <meta name='description' content="ioe21weq description" />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>ioe21weq</title>
    </Head>
      <Banner />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
