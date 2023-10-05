import React, { useState } from "react";
import styles from "./Products.module.scss";
import List from "./section/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id!, 10);
  const [maxPrice, setMaxPrice] = useState<number | string>(1000);
  const [sort, setSort] = useState<string | null>(null);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    console.log(sort);
  };

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Product Categories</h2>
          <div className={styles.inputItem}>
            <input type="checkbox" id="shoes" />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="skirts" />
            <label htmlFor="skirts">Skirts</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id="coats" />
            <label htmlFor="coats">Coats</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Filter by Price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={handleRange} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={handleSort}
            />
            <label htmlFor="asc">price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={handleSort}
            />
            <label htmlFor="desc">price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.catImg}
          src="https://picsum.photos/id/142/640/320"
          alt="catImg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
