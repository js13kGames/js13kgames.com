import {Button, SocialIcons} from "../../components";
import styles from "./hero.module.scss";

export interface HeroProps {
  primaryText: string;
  secondaryText?: string;
  countdownDate?: string;
  btnUrl?: string;
  btnText?: string;
  mainClass?: string;
  variant2?: boolean;
  countdown?: boolean;
  backgroundImage?: string;
  heroButton?: boolean;
  prevEdition?: string;
  // prevEdClass?: string;
}

const Hero = ({
  primaryText,
  secondaryText,
  countdownDate,
  btnUrl,
  btnText,
  mainClass,
  variant2,
  countdown,
  backgroundImage,
  heroButton,
  prevEdition,
}: HeroProps) => {
  return (
    <section
      className={`${styles.container} ${mainClass && styles[mainClass]}`}
      style={{backgroundImage: `url(${backgroundImage})`}}>
      <SocialIcons />
      {variant2 ? (
        <div className={styles.middleWrapper}>
          <p>{primaryText}</p>
        </div>
      ) : (
        <div
          className={`${styles.middleWrapper} ${
            prevEdition && styles[prevEdition]
          }`}>
          <p>{primaryText}</p>
          <p className={styles.description}>
            {secondaryText} {countdown ? `${countdownDate}` : null}
          </p>
        </div>
      )}
      {heroButton ? (
        <Button href={btnUrl} buttonClass="heroBtn">
          {btnText}
        </Button>
      ) : null}
    </section>
  );
};

export default Hero;
