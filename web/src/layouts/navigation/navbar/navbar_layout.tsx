import {useAuth0} from "@auth0/auth0-react";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useState} from "react";
// @ts-ignore
import ShortLogo from "../../../assets/logo/js13kgames-logo-short.svg";
import {Button, Input} from "../../../components";
import {useBurgerVisible} from "../../../utils/useBurgerVisible";
import Burger from "./burger";
import Header from "./header";
import styles from "./navbar.module.scss";
import NavItem from "./navItem";
import Select from "./select";

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
  const [searchOpen, setSearchOpen] = useState(false);
  // const [openProfile, setOpenProfile] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const {
    loginWithRedirect,
    // isLoading,
    // , logout, isAuthenticated, isLoading
  } = useAuth0();

  const isBurgerVisible = useBurgerVisible();

  if (loading) {
    return <h1>Loading</h1>;
  }

  const listenScrollEvent = () => {
    if (
      !isBurgerVisible &&
      window.scrollY >= document.getElementById("navbar").offsetHeight
      // document.getElementById("header").offsetHeight
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
      {isBurgerVisible ? "" : <Header year={year} years={years} />}

      <nav
        id="navbar"
        className={`${styles.navbar} ${styles[navScroll ? "fixed" : ""]}`}>
        <ul
          className={`${styles.navItems} ${
            styles[navScroll ? "navItemsScroll" : ""]
          } ${styles[burgerActive ? "nav-active" : ""]}`}>
          {menuItems.map(({url, title}) => (
            <NavItem href={`/${year}${url}`} content={title} key={title} />
          ))}
          {isBurgerVisible ? (
            <Button
              buttonClass="loginMobile"
              onClick={() => loginWithRedirect()}>
              Register | Login
            </Button>
          ) : (
            ""
          )}
        </ul>
        <FontAwesomeIcon
          className={`${styles.searchIcon} ${styles[navScroll ? "none" : ""]}`}
          icon={searchOpen ? faTimes : faSearch}
          onClick={() => setSearchOpen(!searchOpen)}
        />
        {searchOpen && !navScroll ? <Input /> : ""}
        {navScroll || isBurgerVisible ? (
          <>
            <div className={styles.leftWrapper}>
              <Link href={"/" + year}>
                <img className={styles.logoShort} src={ShortLogo} alt="logo" />
              </Link>
              <Select yearOptions={years} scrollClass="selectScroll" />
            </div>
            {isBurgerVisible ? (
              ""
            ) : (
              <Button buttonClass="newSubmit" href="/submit">
                submit the game
              </Button>
            )}
          </>
        ) : (
          ""
        )}

        <Burger
          onClick={() => setBurgerActive(!burgerActive)}
          burgerClass={burgerActive ? "toggle" : ""}
        />
      </nav>
      {/* <div
        className={`${styles.dropdown} ${styles[openProfile ? "active" : ""]}`}>
        <div className={styles.dropdownItem}>
          <p>
            User Name <span>(user_name@username.com)</span>
          </p>
        </div>
        <div className={styles.dropdownItem}>
          <Link href="/user">
            <a>Profile</a>
          </Link>
        </div>
        <div className={styles.dropdownItem}>
          <p>Log Out</p>
        </div>
        <Button
          buttonClass="closeBtn"
          onClick={() => setOpenProfile(!openProfile)}>
          X
        </Button>
      </div> */}
    </>
  );
};

export default NavbarLayout;
