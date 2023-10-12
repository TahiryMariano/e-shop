import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import styles from "./Cart.module.scss";
import { AppDispatch, useAppSelector } from "../../../store/store";
import { removeItem, resetCart } from "../../../store/features/CartSlice";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "../../../api/api";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useAppSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NzgNzDrFJqiAxvnUbYo5fICE1bczs5qAZy7wX2q1DY7HBtrr72xFW4hdtrd23rW1wYs6yta1zAwhurYld1ovT0g00dC4fqpdf"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await api.post("/orders", { products });
      console.log(res);

      await stripe?.redirectToCheckout({
        sessionId: res?.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cart}>
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className={styles.item} key={item.id}>
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt=""
          />
          <div className={styles.details}>
            <h1>{item.title} </h1>
            <p>{item?.description?.substring(0, 100)} </p>
            <div className={styles.price}>
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlineOutlinedIcon
            className={styles.deleteBtn}
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className={styles.total}>
        <span>TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className={styles.checkout} onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>
      <span className={styles.reset} onClick={() => dispatch(resetCart())}>
        Reset cart
      </span>
    </div>
  );
};

export default Cart;
