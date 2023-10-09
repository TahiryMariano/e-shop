import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import ProductService from "../../services/Product.service";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState() as any;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const id = parseInt(useParams().id!, 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await ProductService.getProductById(id);
        setData(res.data);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log("error fetching product data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.product}>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes.img.data.attributes.url
                }
                alt="side image 1"
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes.img2.data.attributes.url
                }
                alt="side image 2"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className={styles.mainImg}>
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data.attributes.url
                }
                alt="main image"
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1>{data.attributes.title}</h1>
            <span className={styles.price}>${data.attributes.price}</span>
            <p>{data.attributes.description}</p>
            <div className={styles.quantity}>
              <button
                onClick={(e) =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                +
              </button>
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
        </>
      )}
    </div>
  );
};

export default Product;
