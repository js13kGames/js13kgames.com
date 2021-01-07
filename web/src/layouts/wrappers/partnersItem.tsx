import styles from "./partnersItem.module.scss";

export interface PartnersWrapperProps {
  img: string;
  size?: string;
}

const PartnersItem = ({img, size}: PartnersWrapperProps) => {
  return (
    <div
      className={`${styles.container} ${size && styles[size]}`}
      style={{backgroundImage: `url(${img})`}}
    />
  );
};

export default PartnersItem;
