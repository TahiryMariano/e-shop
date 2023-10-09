import styles from "./Categories.module.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img src="https://picsum.photos/id/122/640/320" alt="" />
          <button>
            <Link className={styles.link} to="/products/1">
              Men
            </Link>
          </button>
        </div>
        <div className={styles.row}>
          <img src="https://picsum.photos/id/128/640/320" alt="" />
          <button>
            <Link className={styles.link} to="/products/1">
              women
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img src="https://picsum.photos/id/133/640/320" alt="" />
          <button>
            <Link className={styles.link} to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.col} ${styles["col-l"]}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img src="https://picsum.photos/id/122/640/320" alt="" />
              <button>
                <Link className={styles.link} to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img src="https://picsum.photos/id/122/640/320" alt="" />
              <button>
                <Link className={styles.link} to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <img src="https://picsum.photos/id/122/640/320" alt="" />
          <button>
            <Link className={styles.link} to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
