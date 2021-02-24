import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useState} from "react";
import Logo from "../../../assets/logo/mainLogo.svg";
import {Button} from "../../../components";
import styles from "./navbar.module.scss";
import NavItem from "./navItem";
import Select from "./select.tsx";

export async function getServerSideProps({params}) {
  return {
    props: {
      year: params?.year,
    },
  };
}

const years = [
  {
    year: "2021",
  },
  {
    year: "2020",
  },
  {
    year: "2019",
  },
  {
    year: "2018",
  },
  {
    year: "2017",
  },
  {
    year: "2016",
  },
  {
    year: "2015",
  },
  {
    year: "2014",
  },
  {
    year: "2013",
  },
];

const NavbarLayout = ({loading, menuItems, year}) => {
  const [navScroll, setNavScroll] = useState(false);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const listenScrollEvent = () => {
    if (
      window.scrollY >=
      document.getElementById("navbar").offsetHeight +
        document.getElementById("header").offsetHeight
    ) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  // useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent);
  // }, []);

  return (
    <>
      <header id="header" className={styles.navHeader}>
        {/* <div className={styles.navWrapperTop}> */}
        <Link href={"/" + year}>
          {/* <a>js13kgames logo</a> */}
          <img className={styles.logo} src={Logo} alt="logo" />
          {/* <Logo style={{width: "400px"}} /> */}
        </Link>
        <Select yearOptions={years} />
        <div className={styles.loginWrapper}>
          <Link href="/login">
            <a className={styles.login}>register | login</a>
          </Link>
          <Button buttonClass="newSubmit" href="/submit">
            submit the game
          </Button>
        </div>
      </header>
      {/* <nav className={styles.navWrapper}> */}

      <nav
        id="navbar"
        className={`${styles.navbar} ${styles[navScroll ? "fixed" : ""]}`}>
        <ul
          className={`${styles.navItems} ${
            styles[navScroll ? "navItemsScroll" : ""]
          }`}>
          {menuItems.map(({url, title}) => (
            <NavItem href={`/${year}${url}`} content={title} key={title} />
          ))}
        </ul>
        <FontAwesomeIcon
          className={`${styles.searchIcon} ${styles[navScroll ? "none" : ""]}`}
          icon={faSearch}
        />
        {navScroll ? (
          <>
            <p style={{order: "-2"}}>LOGO</p>
            <Button buttonClass="newSubmit" href="/submit">
              submit the game
            </Button>
            <Select yearOptions={years} scrollClass="selectScroll" />
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default NavbarLayout;
