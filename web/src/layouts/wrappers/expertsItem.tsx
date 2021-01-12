import styles from "./expertsItem.module.scss";

export interface ExpertsWrapperProps {
  img: string;
  name: string;
  description: string;
}

const ExpertsItem = ({img, name, description}: ExpertsWrapperProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt="photo" />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      {/* <p></p> */}
    </div>
  );
};

export default ExpertsItem;
