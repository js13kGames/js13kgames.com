import Navbar from '../layouts/navigation/navbar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar items={[
      { href: "/winners", content: "winners"},
      { href: "/entries", content: "entries"},
      { href: "/partners", content: "partners"},
      { href: "/experts", content: "experts"},
      { href: "/prizes", content: "prizes"},
      { href: "/rules", content: "rules"},
      { href: "/blog", content: "blog"},
      { href: "/prevEdition", content: "previous editions"},
  
    ]} />
    <Component {...pageProps} />
  
    </>
  )

}

export default MyApp
