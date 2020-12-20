import {Button} from "../../components";
import styles from "./accordionNav.module.scss";

const AccordionNav = ({
  isActive,
  onClick,
  headerData,
  yearOptions,
  // allOnClick,
}) => {
  return (
    <nav className={styles.navWrapper}>
      <select>
        {yearOptions.map(({year}) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <ul className={styles.navItems}>
        {/* <Button
          isActive={!isActive}
          buttonClass="item"
          onClick={() => allOnClick()}>
          all
        </Button> */}
        {headerData.map(({title}) => (
          <Button
            key={title}
            isActive={isActive[title]}
            buttonClass="item"
            onClick={() => onClick(title)}>
            {title}
          </Button>
        ))}
      </ul>
    </nav>
  );
};

export default AccordionNav;
