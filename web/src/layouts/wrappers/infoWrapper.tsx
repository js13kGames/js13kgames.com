import Link from "next/link";
import {Button} from "../../components";
import styles from "./infoWrapper.module.scss";

export interface WrapperProps {
  name: string;
  description?: string;
  game?: boolean;
  author?: string;
  socialData?: any;
  children?: string;
  image?: string;
  buttonHref?: string;
  size?: string;
}

const InfoWrapper = ({
  name,
  description,
  game,
  author,
  socialData,
  children,
  image,
  buttonHref,
  size,
}: WrapperProps) => {
  return (
    <div className={styles.infoWrapper}>
      <img
        className={`${styles.authorsImg} ${size && styles[size]}`}
        src={image}
        alt="photo"
      />
      <div className={styles.descriptionWrapper}>
        <h1>{name}</h1>
        {game ? <h3>{author}</h3> : <h3>{description}</h3>}
        <div className={styles.socialWrapper}>
          {socialData.map(({name, url}) => (
            <Link href={url} key={name}>
              <a>{name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.btnsWrapper}>
          <Button href={buttonHref} buttonClass="navAccItem">
            {children}
          </Button>
          <Button href={buttonHref} buttonClass="navAccItem">
            {children}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoWrapper;
