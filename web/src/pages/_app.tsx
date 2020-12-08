import {Footer, Navbar} from "../layouts";
import "../styles/globals.scss";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
