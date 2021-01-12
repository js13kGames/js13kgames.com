import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonsProps {
  children: string;
  href?: string;
  buttonClass: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({
  children,
  href,
  buttonClass,
  onClick,
  isActive,
}: ButtonsProps) => {
  return href ? (
    <Link href={href}>
      <a className={`${styles.button} ${styles[buttonClass]}`}>{children}</a>
    </Link>
  ) : (
    <button
      className={`${styles.button} ${styles[buttonClass]} ${
        isActive && styles.active
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
