import Button from "../../components/Button/button";
import styles from "./bio.module.scss";

const Bio = ({data}) => {
  return (
    <section className={styles.wrapper}>
      {data.map(({title, img, description, path, contentBtn}) => (
        <div className={styles.item} key={title}>
          <h3>{title}</h3>
          <img src={img} alt="image" />
          <p>{description}</p>
          <Button href={path} buttonClass="bioBtn">
            {contentBtn}
          </Button>
        </div>
      ))}
    </section>
  );
};

export default Bio;
