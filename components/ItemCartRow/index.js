import * as React from "react";
import styles from "./itemCartRow.module.css";

import Image from "next/image";

const ItemCartRow = ({ item }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <Image src={item.image} alt="" fill />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.itemInfo}>
          <h4>{item.name}</h4>
          <p>{item.features}</p>
        </div>
        <div className={styles.itemQuantity}>
          <select name="cartQuantity0" value="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button>Remove</button>
        </div>
        <div className={styles.itemPrice}>${item.price}</div>
        <div className={styles.itemTotal}>$176.00</div>
      </div>
    </li>
  );
};

export default ItemCartRow;
