// import styles from "./Home.style.scss";
import Slider from "../../components/display/slider/Slider";
import Categories from "./section/Categories/Categories";
import Contact from "../../components/common/contact/Contact";
import FeaturedProduct from "./section/FeaturedProduct/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="Featured" />
      <Categories />
      <FeaturedProduct type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
