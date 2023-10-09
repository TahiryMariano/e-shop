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

type props = {
  item: {
    id: string | number;
    attributes: {
      createdAt: string;
      description: string;
      isNew: boolean;
      price: number;
      img: any;
      img2: any;
      oldPrice: number;
      publishedAt: string;
      title: string;
      type: string;
      updatedAt: string;
    };
  };
};

const Card = (props: props) => {
  const { id, attributes } = props.item;
  return (
    <Link className={styles.link} to={`/product/${id}`}>
      <div className={styles.card}>
        <div className={styles.images}>
          {attributes.isNew && <span className={styles.isNew}>New Season</span>}
          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              attributes?.img?.data?.attributes?.url
            }
            alt="main image"
            className={styles.mainImage}
          />
          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              attributes?.img2?.data?.attributes?.url
            }
            alt="second image"
            className={styles.secondImage}
          />
        </div>
        <h2 className={styles.title}>{attributes.title}</h2>
        <div className={styles.prices}>
          <h3>{attributes?.oldPrice || attributes.price + 20} </h3>
          <h3>{attributes.price} </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
