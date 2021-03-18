import {useAuth0} from "@auth0/auth0-react";
import Link from "next/link";
import {useState} from "react";
import Logo from "../../../assets/logo/js13kgames-logo.svg";
import {Button} from "../../../components";
import styles from "./header.module.scss";
import Select from "./select";

const Header = ({year, years}) => {
  const [openProfile, setOpenProfile] = useState(false);

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <header id="header" className={styles.navHeader}>
      <Link href={"/" + year}>
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <Select yearOptions={years} />
      <div className={styles.loginWrapper}>
        {isAuthenticated ? (
          <div
            className={styles.loggedInWrapper}
            onClick={() => setOpenProfile(!openProfile)}>
            <img src={user.picture} className={styles.avatar}></img>
            {/* <p className={styles.name}>
              {user.name}
              <span
                className={styles.logout}
                onClick={() => logout({returnTo: window.location.origin})}>
                (log out)
              </span>
            </p> */}
            <div
              className={`${styles.dropdown} ${
                styles[openProfile ? "active" : ""]
              }`}>
              <div className={styles.dropdownItem}>
                <p>
                  {user.name} <span>({user.email})</span>
                </p>
              </div>
              <div className={styles.dropdownItem}>
                <Link href="/user">
                  <a>Profile</a>
                </Link>
              </div>
              <div className={styles.dropdownItem}>
                <p
                  className={styles.logout}
                  onClick={() => logout({returnTo: window.location.origin})}>
                  Log Out
                </p>
              </div>
              <Button
                buttonClass="closeBtn"
                onClick={() => setOpenProfile(!openProfile)}>
                X
              </Button>
            </div>
          </div>
        ) : (
          <Button buttonClass="login" onClick={() => loginWithRedirect()}>
            Register | Login
          </Button>
        )}
        <Button buttonClass="newSubmit" href="/submit">
          submit the game
        </Button>
      </div>
    </header>
  );
};

export default Header;
