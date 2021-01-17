import {Button} from "../../components";
import styles from "./prevEditionWrapper.module.scss";

export interface WrapperProps {
  year: string;
  description: string;
  img: string;
}

const prevEditionWrapper = ({year, description, img}: WrapperProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{year} edition</h1>
      <img className={styles.image} src={img} alt="edition's photo" />
      <p className={styles.description}>{description}</p>
      <Button href={year} buttonClass="prevEdition">
        more
      </Button>
    </div>
  );
};

export default prevEditionWrapper;
