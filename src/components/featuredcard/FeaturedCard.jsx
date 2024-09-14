import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedCard = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="featured__card">
        <img
          src={
            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
            item?.attributes?.img?.data?.attributes?.url
          }
          alt={item?.attributes.title}
        />
        <p className="featured__name">{item?.attributes.title}</p>
        <p className="featured__price">
          <span className="featured__old-price">
            {" "}
            £{item?.attributes.oldPrice || item?.attributes.price + 20}
          </span>
          <span className="featured__new-price">£{item?.attributes.price}</span>
        </p>
      </div>
    </Link>
  );
};

export default FeaturedCard;
