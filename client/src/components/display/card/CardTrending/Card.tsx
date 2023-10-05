import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type CardProps = {
  item: {
    id: number;
    img: string;
    img2: string;
    title: string;
    isNew: boolean;
    oldPrice: string;
    Price: string;
  };
};

const Card = (props: CardProps) => {
  const { id, img, img2, title, isNew, oldPrice, Price } = props.item;
  return (
    <Link className={styles.link} to={`/product/${id}`}>
      <div className={styles.card}>
        <div className={styles.images}>
          {isNew && <span className={styles.isNew}>New Season</span>}
          <img src={img} alt="" className={styles.mainImage} />
          <img src={img2} alt="" className={styles.secondImage} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.prices}>
          <h3>{oldPrice} </h3>
          <h3>{Price} </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
