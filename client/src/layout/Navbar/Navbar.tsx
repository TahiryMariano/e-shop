import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            {/* <img src={gb} alt="GB" /> */}
            <span>EN</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} to="/product/1">Women</Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} to="/product/1">Men</Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} to="/product/1">children</Link>
          </div>
        </div>

        <div className={styles.center}>
          <Link className={styles.link} to="/">E-Shop</Link>
        </div>

        <div className={styles.right}>
        <div className={styles.item}>
          <Link className={styles.link} to="/">Home</Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to="/">About</Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to="/">Contact</Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to="/">Stores</Link>
        </div>
        <div className={styles.icons}>
          <SearchIcon/>
          <PersonOutlineIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className={styles.cartIcon}>
          <ShoppingCartOutlinedIcon/>
          <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar