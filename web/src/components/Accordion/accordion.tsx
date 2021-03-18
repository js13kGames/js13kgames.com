import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
  category?: string;
  children: JSX.Element;
  variant?: string;
}

const Accordion = ({
  title,
  onClick,
  isOpen,
  category,
  children,
  variant,
}: AccordionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          {category} {title}
        </h3>
        {/* <span onClick={onClick}> */}
        <FontAwesomeIcon
          className={styles.icon}
          icon={isOpen[title] ? faMinus : faPlus}
          onClick={onClick}
          // width={20}
          // height={20}
        />
        {/* </span> */}
      </div>
      <div
        className={`${isOpen[title] ? styles.open : ""} ${styles.content} ${
          variant && styles[variant]
        }`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
