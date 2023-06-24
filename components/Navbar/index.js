import * as React from "react";
import MenuIcon from "./MenuIcon";
import styles from "./navbar.module.css";

import BrandIcon from "../varied/Icons/BrandIcon";
import CartIcon from "../varied/Icons/CartIcon";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const menuListVariants = {
  open: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    border: "1px solid #eb6347",
  },
  closed: {
    opacity: 1,
    border: "none",
    clipPath: "inset(0% 0% 100% 0%)",
  },
};

const buttonVariants = {
  active: {
    backgroundColor: "#eb6347",
  },
  notActive: {
    backgroundColor: "#727272",
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const itemsAmount = useSelector((state) => state.cart.items.length);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <motion.nav
      className={styles.container}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.8,
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 75,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.brandLogo} onClick={() => router.push("/")}>
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
            <motion.li
              onClick={() => {
                router.push("/about");
                setIsActive(false);
              }}
              whileHover={{ color: "#e0e0e0" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              About
            </motion.li>
            <motion.li
              onClick={() => {
                router.push("/store");
                setIsActive(false);
              }}
              whileHover={{ color: "#e0e0e0" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Store
            </motion.li>

            <motion.li
              onClick={() => {
                router.push("/events");
                setIsActive(false);
              }}
              whileHover={{ color: "#e0e0e0" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Events
            </motion.li>
          </motion.ul>
        </div>
        <div
          className={styles.cartLink}
          onClick={() => router.push("/store/shopping-cart")}
        >
          <CartIcon />
          <div className={styles.itemsAmount}>{itemsAmount}</div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
