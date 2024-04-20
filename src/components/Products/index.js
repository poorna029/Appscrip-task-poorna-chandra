import React, { useEffect, useState } from "react";
import Product from "../Product";
import styles from "./index.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Update state with fetched products
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return products ? (
    <ul className={styles.products}>
      {products.map((x) => (
        <Product product={x} />
      ))}
    </ul>
  ) : null;
};

export default Products;
