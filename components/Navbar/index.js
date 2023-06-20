import * as React from "react";
import MenuIcon from "./MenuIcon";
import styles from "./navbar.module.css";

import BrandIcon from "../varied/Icons/BrandIcon";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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

  const router = useRouter();

  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.brandLogo} onClick={() => router.push('/')}>
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
            <li onClick={() => router.push('/about')}>About</li>
            <li onClick={() => router.push('/store')}>Store</li>
            <li onClick={() => router.push('/events')}>Events</li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
