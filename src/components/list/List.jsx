/* eslint-disable react/prop-types */
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ selectedSubCategories, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `products.php?category=${catId}${selectedSubCategories.map(
      (item) => `&subcategories[]=${item}`
    )}&max_price=${maxPrice}&sort=${sort}`
  );

  return (
    <div className="list">
      {error
        ? "Something went wrong"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
