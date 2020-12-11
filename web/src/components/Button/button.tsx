import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonsProps {
  children: string;
  href?: string;
  buttonClass: string;
  onClick?: () => void;
}

const Button = ({children, href, buttonClass, onClick}: ButtonsProps) => {
  return href ? (
    <Link href={href}>
      <a className={styles[buttonClass]}>{children}</a>
    </Link>
  ) : (
    <button className={styles[buttonClass]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
