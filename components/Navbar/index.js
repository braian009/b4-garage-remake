import * as React from "react";
import MenuIcon from "./MenuIcon";
import styles from "./navbar.module.css";

import BrandIcon from "../varied/Icons/BrandIcon";
import { motion } from "framer-motion";

const menuListVariants = {
  open: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    border: "1px solid #e84b2c",
  },
  closed: {
    opacity: 1,
    border: "none", 
    clipPath: "inset(0% 0% 100% 0%)",
  },
};

const buttonVariants = {
  active: {
    backgroundColor: "#e84b2c",
  },
  notActive: {
    backgroundColor: "#727272",
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.brandLogo}>
          <BrandIcon />
        </div>
        <div className={styles.navMenu}>
          <motion.button
            className={styles.navButton}
            onClick={() => setIsActive(!isActive)}
            variants={buttonVariants}
            initial={false}
            animate={isActive ? "active" : "notActive"}

          >
            <MenuIcon />
          </motion.button>
          <motion.ul
            variants={menuListVariants}
            initial={false}
            animate={isActive ? "open" : "closed"}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 700,
              damping: 100,
            }}
            className={styles.navList}
          >
            <li>About</li>
            <li>Gallery</li>
            <li>Store</li>
            <li>Events</li>
            <li>Contact</li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
