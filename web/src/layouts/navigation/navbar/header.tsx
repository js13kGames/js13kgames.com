import Link from "next/link";
import Logo from "../../../assets/logo/js13kgames-logo.svg";
import {Button} from "../../../components";
import styles from "./header.module.scss";
import Select from "./select";

const Header = ({year, years}) => {
  return (
    <header id="header" className={styles.navHeader}>
      <Link href={"/" + year}>
        <img className={styles.logo} src={Logo} alt="logo" />
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
  );
};

export default Header;
