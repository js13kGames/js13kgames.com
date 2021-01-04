import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
  category?: string;
  children: JSX.Element;
  flex?: boolean;
}

const Accordion = ({
  title,
  onClick,
  isOpen,
  category,
  children,
  flex,
}: AccordionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          {category} {title}
        </h3>
        <span onClick={onClick}>
          <FontAwesomeIcon icon={isOpen[title] ? faMinus : faPlus} />
        </span>
      </div>
      <div
        className={`${isOpen[title] ? styles.open : ""} ${styles.content} ${
          flex && styles.flex
        }`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
