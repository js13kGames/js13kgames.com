import styles from "./navSkeleton.module.scss";

const headerId = ["1", "2", "3"];
const navId = ["1", "2", "3", "4", "5"];

export interface NavSkeletonProps {
  header?: boolean;
}

const NavSkeleton = ({header}: NavSkeletonProps) => {
  return (
    <div className={`${styles.skeleton} ${header ? styles.header : ""}`}>
      {header ? (
        <>
          {headerId.map((id) => (
            <div className={styles.headerItem} key={id} />
          ))}
        </>
      ) : (
        <>
          {navId.map((id) => (
            <div className={styles.skeletonItem} key={id} />
          ))}
        </>
      )}
    </div>
  );
};

export default NavSkeleton;
