import styles from "./partnersItem.module.scss";

const PartnersItem = ({img}) => {
  return (
    <div
      className={styles.container}
      style={{backgroundImage: `url(${img})`}}
    />
  );
};

export default PartnersItem;
