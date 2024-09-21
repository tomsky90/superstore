/* eslint-disable react/prop-types */
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ selectedSubCategories, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catId}${selectedSubCategories.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""}`
  );

  return (
    <div className="list">
      {console.log(maxPrice)}
      {error
        ? "Something went wrong"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
