import {SocialIcons} from "../../components";
import styles from "./header.module.scss";

export interface HeaderProps {
  primaryText: string;
}

const Header = ({primaryText}: HeaderProps) => {
  return (
    <div className={styles.container}>
      <SocialIcons />
      <h1>{primaryText}</h1>
    </div>
  );
};

export default Header;
