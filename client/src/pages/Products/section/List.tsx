import React from "react";
import styles from "./List.module.scss";
import Card from "../../../components/display/card/CardTrending/Card";

const data = [
  {
    id: 1,
    img: "https://picsum.photos/id/117/640/320",
    img2: "https://picsum.photos/id/118/640/320",
    title: "Bleak House",
    isNew: true,
    oldPrice: "$4.74",
    Price: "$3.96",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/119/640/320",
    img2: "https://picsum.photos/id/12/640/320",
    title: "Canyon Passage",
    isNew: false,
    oldPrice: "$8.45",
    Price: "$5.16",
  },
  {
    id: 3,
    img: "https://picsum.photos/id/120/640/320",
    img2: "https://picsum.photos/id/121/640/320",
    title: "Family Resemblances",
    isNew: true,
    oldPrice: "$1.62",
    Price: "$1.44",
  },
  {
    id: 4,
    img: "https://picsum.photos/id/122/640/320",
    img2: "https://picsum.photos/id/123/640/320",
    title: "Wake of the Red Witch",
    isNew: true,
    oldPrice: "$7.91",
    Price: "$3.34",
  },
  {
    id: 5,
    img: "https://picsum.photos/id/124/640/320",
    img2: "https://picsum.photos/id/125/640/320",
    title: "Bloodsport 2",
    isNew: false,
    oldPrice: "$9.04",
    Price: "$8.79",
  },
];

type ListProps = {
  catId: number;
  sort: string | null;
  maxPrice: number | string;
};

const List = (props: ListProps) => {
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <Card item={item} key={item.id}></Card>
      ))}
    </div>
  );
};

export default List;
