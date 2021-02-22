import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./navbar.module.scss";
import NavItem from "./navItem";

const NavbarLayout = ({loading, menuItems, year}) => {
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <header className={styles.navHeader}>
        {/* <div className={styles.navWrapperTop}> */}
        <Link href={"/" + year}>
          <a>js13kgames logo</a>
        </Link>
        <div className={styles.loginWrapper}>
          <Link href="/register">
            <a>register</a>
          </Link>
          <p> / </p>
          <Link href="/login">
            <a>login</a>
          </Link>
        </div>
      </header>
      {/* <nav className={styles.navWrapper}> */}

      <nav className={styles.navbar}>
        {/* <div > */}
        <ul className={styles.navItems}>
          {menuItems.map(({url, title}) => (
            <NavItem href={`/${year}${url}`} content={title} key={title} />
          ))}
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        {/* </div> */}
      </nav>
    </>
  );
};

export default NavbarLayout;
