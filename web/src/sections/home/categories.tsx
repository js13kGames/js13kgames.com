import Button from "../../components/Button/button";
import styles from "./categories.module.scss";

const Categories = ({title, categories, btnUrl, btnText}) => {
  return (
    <section className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.categories}>
        {categories.map(({title, img}) => (
          <div
            key={title}
            className={styles.categoriesItem}
            style={{backgroundImage: `url('${img}')`}}>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <Button href={btnUrl} buttonClass="categoryBtn">
        {btnText}
      </Button>
    </section>
  );
};

export default Categories;
