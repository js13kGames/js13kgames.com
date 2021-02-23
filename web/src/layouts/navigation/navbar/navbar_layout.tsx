import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {useEffect, useState} from "react";
import Logo from "../../../assets/logo/mainLogo.svg";
import {Button} from "../../../components";
import styles from "./navbar.module.scss";
import NavItem from "./navItem";

const NavbarLayout = ({loading, menuItems, year}) => {
  const [navScroll, setNavScroll] = useState(false);

  if (loading) {
    return <h1>Loading</h1>;
  }

  const listenScrollEvent = () => {
    if (window.scrollY >= document.getElementById("navbar").offsetHeight) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <header className={styles.navHeader}>
        {/* <div className={styles.navWrapperTop}> */}
        <Link href={"/" + year}>
          {/* <a>js13kgames logo</a> */}
          <img className={styles.logo} src={Logo} alt="logo" />
          {/* <Logo style={{width: "400px"}} /> */}
        </Link>
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
        {/* <div > */}
        <ul className={styles.navItems}>
          {menuItems.map(({url, title}) => (
            <NavItem href={`/${year}${url}`} content={title} key={title} />
          ))}
        </ul>
        <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
        {/* </div> */}
      </nav>
    </>
  );
};

export default NavbarLayout;
