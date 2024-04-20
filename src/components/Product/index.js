import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const Product = ({ product }) => {
  product && console.log(product);
  const { title, image, id, rating } = product ? product : "";
  return product ? (
    <li className={styles.product_main}>
      <img className={styles.img_style} src={image} alt={`${title}-avatar`} />
      <div className={styles.name_section}>
        <p className={styles.product_name}>{title.slice(0, 50)}</p>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </li>
  ) : null;
};

export default Product;
