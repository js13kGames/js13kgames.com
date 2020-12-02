import styles from "./winners.module.scss";

const Winners = ({title, categories}) => {
  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.categoriesWrapper}>
        {categories.map(({title, img, description}) => (
          <div className={styles.categoryBox} key={title}>
            <h3>{title}</h3>
            <img src={img} />
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winners;
