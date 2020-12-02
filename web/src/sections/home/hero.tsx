import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../../components/Button/button";
import styles from "./hero.module.scss";

const Hero = ({
  primaryText,
  secondaryText,
  countdownDate,
  btnUrl,
  btnText,
  socialLinks,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.socialIcons}>
        {socialLinks.map(({url, title, iconName}) => (
          <li className={styles.iconWrapper} key={title}>
            <Link href={url}>
              <a title={title}>
                <FontAwesomeIcon className={styles.icon} icon={iconName} />{" "}
              </a>
            </Link>
          </li>
        ))}
      </div>
      <div className={styles.middleWrapper}>
        <p>{primaryText}</p>
        <p>
          {secondaryText}: {countdownDate}
        </p>
      </div>
      <Button href={btnUrl} buttonClass="heroBtn">
        {btnText}
      </Button>
    </section>
  );
};

export default Hero;
