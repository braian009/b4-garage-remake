import * as React from "react";
import MenuIcon from "./MenuIcon";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.brandLogo}>b4</div>
        <div className={styles.navMenu}>
          <button className={styles.navButton}>
            <MenuIcon/>
          </button>
          <ul className={styles.navList}>
            <li>About</li>
            <li>Gallery</li>
            <li>Store</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
