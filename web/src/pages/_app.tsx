import Navbar from '../layouts/navigation/navbar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar  />
    <Component {...pageProps} />
  
    </>
  )

}

export default MyApp
