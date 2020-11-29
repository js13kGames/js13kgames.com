import Link from 'next/link';
import styles from './navItem.module.scss';

const NavItem = ({href, content}) => {
    return (
        <li className={styles.item}>
            <Link href={href}>
                <a>{content}</a>
            </Link>
        </li>
    );
};

export default NavItem;