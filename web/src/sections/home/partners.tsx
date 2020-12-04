import Link from "next/link";
import Button from "../../components/Button/button";
import styles from "./partners.module.scss";

const Partners = ({title, gold, silver, platinum, btnUrl, btnText}) => {
  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div>
        <div className={styles.platinum}>
          {platinum.map(({img, url, name}) => (
            <Link href={url} key={name}>
              <img src={img} alt={name} title={name} />
            </Link>
          ))}
        </div>
        <div className={styles.gold}>
          {gold.map(({url, name, img}) => (
            <Link href={url} key={name}>
              <img src={img} alt={name} title={name} />
            </Link>
          ))}
        </div>
        <div className={styles.silver}>
          {silver.map(({img, name, url}) => (
            <Link href={url} key={name}>
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
