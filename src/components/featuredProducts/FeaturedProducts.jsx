import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ location }) => {
  const { data, loading, error } = useFetch(`products.php/?is_${location}=1`);
  if (data) data.length = 4;

  return (
    <section className="featured">
      <h2 className="featured__heading">{location}</h2>
      <div className="featured__cards-wrapper">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
