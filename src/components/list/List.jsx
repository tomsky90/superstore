import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const list = ({ selectedSubCategories, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catId}`
  );
  console.log(data);

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

export default list;
