import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import styles from "./Product.module.scss";

const images = [
  "https://picsum.photos/id/146/640/320",
  "https://picsum.photos/id/175/640/320",
];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className={styles.mainImg}>
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Title</h1>
        <span className={styles.price}>$133</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ut
          laboriosam ad sed perferendis nihil dicta illo sunt incidunt.
        </p>
        <div className={styles.quantity}>
          <button
            onClick={(e) => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className={styles.add}>
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <div className={styles.links}>
          <div className={styles.item}>
            <FavoriteBorderIcon />
            Add to wishlist
          </div>
          <div className={styles.item}>
            <BalanceIcon />
            Add to compare
          </div>
        </div>
        <div className={styles.info}>
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt,women, top</span>
        </div>
        <hr />
        <div className={styles.details}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
