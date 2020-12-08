import {Button, SocialIcons} from "../../components";
import styles from "./hero.module.scss";

export interface HeroProps {
  primaryText: string;
  secondaryText?: string;
  countdownDate?: string;
  btnUrl?: string;
  btnText?: string;
  mainClass?: string;
  // variant2?: boolean;
  // variant3?: boolean;
  // prevEdClass?: string;
}

const Hero = ({
  primaryText,
  secondaryText,
  countdownDate,
  btnUrl,
  btnText,
  mainClass,
}: HeroProps) => {
  return (
    <section
      className={`${styles.container} ${mainClass && styles[mainClass]}`}>
      <SocialIcons />
      <div className={styles.middleWrapper}>
        <p>{primaryText}</p>
        <p>
          {secondaryText} {countdownDate}
        </p>
      </div>
      <Button href={btnUrl} buttonClass="heroBtn">
        {btnText}
      </Button>
    </section>
  );
};

export default Hero;
