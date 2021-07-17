import Button from "../../components/Button/button";
import {useBurgerVisible} from "../../utils/useBurgerVisible";
import styles from "./categories.module.scss";

const Categories = ({title, categories, btnUrl, btnText}) => {
  const isBurgerVisible = useBurgerVisible();

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
      {isBurgerVisible ? (
        ""
      ) : (
        <Button href={btnUrl} buttonClass="categoryBtn">
          {btnText}
        </Button>
      )}
    </section>
  );
};

export default Categories;
