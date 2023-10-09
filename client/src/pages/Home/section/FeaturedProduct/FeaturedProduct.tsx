import styles from "./FeaturedProduct.module.scss";

import { useEffect, useState } from "react";
import ProductService from "../../../../services/Product.service";
import Card from "../../../../components/display/card/CardTrending/Card";

type FeaturedProductProps = {
  type: string;
};

const FeaturedProduct = (props: FeaturedProductProps) => {
  const { type } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await ProductService.getAllProduct(type);
        setData(res.data);
      } catch (error) {
        setError(true);
        console.log("error fetching product data", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.featuredProduct}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
          suscipit quia consequatur debitis velit illo voluptate magnam,
          exercitationem quod necessitatibus excepturi esse maxime totam aperiam
          nostrum, repudiandae perspiciatis cupiditate ullam fugiat quidem
          possimus doloribus blanditiis atque. Eaque reprehenderit autem
          delectus necessitatibus aliquam ipsum sed, distinctio perspiciatis
          maxime unde atque?
        </p>
      </div>
      <div className={styles.bottom}>
        {error
          ? "Something went wrong"
          : loading
          ? "loading data"
          : data.map((item, index) => <Card item={item} key={index} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
