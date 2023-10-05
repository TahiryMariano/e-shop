import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import styles from "./Cart.module.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/id/117/640/320",
      img2: "https://picsum.photos/id/118/640/320",
      title: "Bleak House",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      oldPrice: "$4.74",
      Price: "$3.96",
    },
    {
      id: 2,
      img: "https://picsum.photos/id/119/640/320",
      img2: "https://picsum.photos/id/12/640/320",
      title: "Canyon Passage",
      isNew: false,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      oldPrice: "$8.45",
      Price: "$5.16",
    },
  ];

  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <img src={item.img} alt="" />
          <div className={styles.details}>
            <h1>{item.title} </h1>
            <p>{item.desc.substring(0, 100)} </p>
            <div className={styles.price}>1 x ${item.Price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className={styles.deleteBtn} />
        </div>
      ))}
      <div className={styles.total}>
        <span>TOTAL</span>
        <span>$123</span>
      </div>
      <button className={styles.checkout}>PROCEED TO CHECKOUT</button>
      <span className={styles.reset}>Reset cart</span>
    </div>
  );
};

export default Cart;
