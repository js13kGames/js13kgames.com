import styles from "./burger.module.scss";

const items = [styles.line1, styles.line2, styles.line3];

const Burger = ({onClick, burgerClass}) => {
  //   const isBurgerVisible = useBurgerVisible();

  return (
    <div
      onClick={onClick}
      className={`${styles.burger} ${styles[burgerClass]}`}>
      {items.map((style, i) => (
        <div key={i} className={style} />
      ))}
    </div>
  );
};

export default Burger;
