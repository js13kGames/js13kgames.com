import NavItem from "./navItem";
import styles from "./navbar.module.scss";

const Navbar = ({items = []}) => {
    return (
        <nav className={styles.navWrapper}>
            <div className={styles.navWrapperTop}>
                <p>logo js13kgames</p>
                <p>register / log in</p>
            </div>
            <div className={styles.navWrapperBottom}>
            <ul className={styles.navItems}>
            {items.map(({href, content}) => (
                    <NavItem href={href} content={content} key={content} />
            ))}
            </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;