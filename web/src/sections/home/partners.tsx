import Link from "next/link";
import Button from "../../components/Button/button";
import styles from "./partners.module.scss";

const Partners = ({title, gold, silver, brown, btnUrl, btnText}) => {
  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div>
        <div className={styles.gold}>
          {gold.map(({img, url, name}) => (
            <Link href={url}>
              <img src={img} alt={name} title={name} />
            </Link>
          ))}
        </div>
        <div className={styles.silver}>
          {silver.map(({url, name, img}) => (
            <Link href={url}>
              <img src={img} alt={name} title={name} />
            </Link>
          ))}
        </div>
        <div className={styles.brown}>
          {brown.map(({img, name, url}) => (
            <Link href={url}>
              <img src={img} alt={name} title={name} />
            </Link>
          ))}
        </div>
      </div>
      <Button href={btnUrl} buttonClass="partnersBtn">
        {btnText}
      </Button>
    </section>
  );
};

export default Partners;
