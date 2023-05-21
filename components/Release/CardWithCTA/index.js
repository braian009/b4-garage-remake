import * as React from "react";
import styles from "./card.module.css";

const CardWithCTA = () => {
  return (
    <div className={styles.cardContainer}>
      <h4>some title of some kind</h4>
      <p>
        Enim duis quis Lorem elit irure non fugiat. Ad proident enim eiusmod
        laboris dolor nisi laboris ea pariatur magna veniam labore labore.
        Labore mollit est nisi labore eu est quis incididunt ullamco proident
        ullamco voluptate deserunt sit. Deserunt sint ex magna eiusmod nostrud
        sunt eiusmod veniam.
      </p>
      <button>Call to action</button>
    </div>
  );
};

export default CardWithCTA;
