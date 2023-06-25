import * as React from "react";
import styles from "./checkout.module.css";
import { bebasNeue } from "@/styles/fonts";

import { motion } from "framer-motion";

import GoBackButton from "@/components/varied/GoBackButton";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { purchaseItems } from "@/redux/purchaseAction";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.items);

  const handleCheckout = () => {
    new Promise((resolve) => {
      resolve(dispatch(purchaseItems({ cart: cartList })));
    }).then(() => {
      router.push("/");
    });
  };

  !cartList.length && router.push("/");
  return (
    <div className={styles.container}>
      {cartList.length && (
        <motion.div
          className={styles.inner}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 75,
          }}
        >
          <GoBackButton />
          <h1 className={bebasNeue.className}>Checkout</h1>
          <div className={styles.checkoutCard}>
            <h4>
              The developer of this site was a bit lazy at this point, and
              simply didn&apos;t want to implement a fake payment system, so he
              left this single button for you, the user, to complete the
              payment. Sorry for the inconvenience :D
            </h4>
            <motion.div
              onClick={handleCheckout}
              whileHover={{
                backgroundColor: "#1f1f1f",
                color: "#eb6347",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              Got it!
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Checkout;
