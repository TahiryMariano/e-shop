import styles from "./FeaturedProduct.module.scss";

import { useEffect, useState } from "react";
import ProductService from "../../../../services/Product.service";
import Card from "../../../../components/display/card/CardTrending/Card";

type FeaturedProductProps = {
  type: string;
};

// const data = [
//   {
//     id: 1,
//     img: "https://picsum.photos/id/117/640/320",
//     img2: "https://picsum.photos/id/118/640/320",
//     title: "Bleak House",
//     isNew: true,
//     oldPrice: "$4.74",
//     Price: "$3.96",
//   },
//   {
//     id: 2,
//     img: "https://picsum.photos/id/119/640/320",
//     img2: "https://picsum.photos/id/12/640/320",
//     title: "Canyon Passage",
//     isNew: false,
//     oldPrice: "$8.45",
//     Price: "$5.16",
//   },
//   {
//     id: 3,
//     img: "https://picsum.photos/id/120/640/320",
//     img2: "https://picsum.photos/id/121/640/320",
//     title: "Family Resemblances",
//     isNew: true,
//     oldPrice: "$1.62",
//     Price: "$1.44",
//   },
//   {
//     id: 4,
//     img: "https://picsum.photos/id/122/640/320",
//     img2: "https://picsum.photos/id/123/640/320",
//     title: "Wake of the Red Witch",
//     isNew: true,
//     oldPrice: "$7.91",
//     Price: "$3.34",
//   },
//   {
//     id: 5,
//     img: "https://picsum.photos/id/124/640/320",
//     img2: "https://picsum.photos/id/125/640/320",
//     title: "Bloodsport 2",
//     isNew: false,
//     oldPrice: "$9.04",
//     Price: "$8.79",
//   },
// ];

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
        console.log(res.data);
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
