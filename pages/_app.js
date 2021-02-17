import "../styles/globals.css";
import Banner from "../coms/Banner/Banner";
import Nav from "../coms/Nav/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
