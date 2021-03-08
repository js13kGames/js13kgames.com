import {useAuth0} from "@auth0/auth0-react";
import Link from "next/link";
import Logo from "../../../assets/logo/js13kgames-logo.svg";
import {Button} from "../../../components";
import styles from "./header.module.scss";
import Select from "./select";

const Header = ({year, years}) => {
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
          <div className={styles.loggedInWrapper}>
            <img src={user.picture} className={styles.avatar}></img>
            <p className={styles.name}>
              {user.name}
              <span
                className={styles.logout}
                onClick={() => logout({returnTo: window.location.origin})}>
                (log out)
              </span>
            </p>
          </div>
        ) : (
          <Button onClick={() => loginWithRedirect()}>login</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
