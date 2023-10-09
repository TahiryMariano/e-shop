import styles from "./List.module.scss";
import Card from "../../../components/display/card/CardTrending/Card";
import useFetch from "../../../hooks/useFetch";

type ListProps = {
  catId: number;
  sort: string | null;
  maxPrice: number | string;
  subCats?: number[] | string[];
};

const List = (props: ListProps) => {
  const { catId, subCats, maxPrice, sort } = props;

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats?.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    &filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className={styles.list}>
      {error
        ? "Something went wrong"
        : loading
        ? "loading data"
        : data.map((item: any) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
