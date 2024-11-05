/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scroll";

const Card = ({ item }) => {
  return (
    <Link
      className="link card"
      onClick={() => scrollToTop()}
      to={`/product/${item.id}`}
    >
      <div className="card__wrapper">
        <div className="card__img-wrapper">
          {item?.is_new ? (
            <span className="card__new-product-label">New Seson</span>
          ) : null}
          <img
            className="card__img card__img--main"
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item?.img}
            alt={item?.product_name}
          />

          <img
            className="card__img card__img--second"
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item?.img2}
            alt={item?.product_name}
          />
        </div>

        <h2 className="card__h2">{item?.product_name}</h2>
        <div className="card__prices">
          <h3 className="card__price card__price--old">
            ${item?.oldPrice || (parseFloat(item?.price) + 20).toFixed(2)}
          </h3>
          <h3 className="card__price">${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
