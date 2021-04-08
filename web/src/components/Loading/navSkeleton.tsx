import styles from "./navSkeleton.module.scss";

export interface NavSkeletonProps {
  header?: boolean;
}

const NavSkeleton = ({header}: NavSkeletonProps) => {
  return (
    <div className={`${styles.skeleton} ${header ? styles.header : ""}`}>
      {header ? (
        <>
          <div className={styles.headerItem} />
          <div className={styles.headerItem} />
          <div className={styles.headerItem} />
        </>
      ) : (
        <>
          <div className={styles.skeletonItem} />
          <div className={styles.skeletonItem} />
          <div className={styles.skeletonItem} />
          <div className={styles.skeletonItem} />
          <div className={styles.skeletonItem} />
        </>
      )}
    </div>
  );
};

export default NavSkeleton;
