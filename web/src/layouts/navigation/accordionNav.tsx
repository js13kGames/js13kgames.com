import {Button} from "../../components";
import styles from "./accordionNav.module.scss";

const AccordionNav = ({
  isActive,
  onClick,
  headerData,
  //   yearOptions,
  allOnClick,
}) => {
  //   const router = useRouter();

  //   const onYearChange = (year) => {
  //     router.push(router.pathname.replace("[year]", year));
  //   };

  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navItems}>
        <Button
          isActive={!isActive}
          buttonClass="navAccItem"
          onClick={() => allOnClick()}>
          all
        </Button>
        {headerData.map(({title}) => (
          <Button
            key={title}
            isActive={isActive[title]}
            buttonClass="navAccItem"
            onClick={() => onClick(title)}>
            {title}
          </Button>
        ))}
      </ul>
    </nav>
  );
};

export default AccordionNav;
