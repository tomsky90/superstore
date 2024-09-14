import useFetch from "../../hooks/useFetch";
import FeaturedCard from "../featuredcard/FeaturedCard";

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ location }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][type][$eq]=${location}`
  );

  return (
    <section className="featured">
      <h2 className="featured__heading">{location}</h2>
      <div className="featured__cards-wrapper">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data?.map((item) => <FeaturedCard item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
