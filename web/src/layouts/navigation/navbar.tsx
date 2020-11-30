import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import NavItem from "./navItem";

const Navbar = () => {
const [menuItems, setMenuItems] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const buffer = await fetch('/api/menu_items');
            const data = await buffer.json();
            setMenuItems(data)
        } catch (e) {
            new Error('error')
        }
    }
    fetchData();
}, [])

    return (
        <nav className={styles.navWrapper}>
            <div className={styles.navWrapperTop}>
                <p>logo js13kgames</p>
                <p>register / log in</p>
            </div>
            <div className={styles.navWrapperBottom}>
            <ul className={styles.navItems}>
            {menuItems.map(({url, title}) => (
                <NavItem href={url} content={title} key={title} />
            ))}
            </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;