import {Button, SocialIcons} from "../../components";
import styles from "./hero.module.scss";

const Hero = ({
  primaryText,
  secondaryText,
  countdownDate,
  btnUrl,
  btnText,
  mainClass,
  secondary,
}) => {
  return (
    <section
      className={`${styles.container} ${mainClass && styles[mainClass]}`}>
      <SocialIcons />
      <div className={styles.middleWrapper}>
        {secondary ? (
          <p>{primaryText}</p>
        ) : (
          <>
            <p>{primaryText}</p>
            <p>
              {secondaryText}: {countdownDate}
            </p>
            <Button href={btnUrl} buttonClass="heroBtn">
              {btnText}
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
