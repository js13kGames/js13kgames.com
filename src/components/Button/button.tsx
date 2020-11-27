import Link from 'next/link';
import styles from "./button.module.scss";

export interface ButtonsProps {
    children: string;
    href: string;
    buttonClass: string;
}

const Button = ({children, href, buttonClass}: ButtonsProps) => {
    return (
        <Link href={href}>
            <a className={styles[buttonClass]}>{children}</a>
        </Link>
    );
};

export default Button;