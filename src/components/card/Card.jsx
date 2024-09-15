/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card__img-wrapper">
          {item?.attributes?.isNew && (
            <span className="card__new-product-label">New Seson</span>
          )}
          <img
            className="card__img card__img--main"
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt={item?.attributes?.title}
          />

          <img
            className="card__img card__img--second"
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt={item?.attributes?.title}
          />
        </div>

        <h2 className="card__h2">{item?.attributes?.title}</h2>
        <div className="card__prices">
          <h3 className="card__price card__price--old">
            ${item?.attributes?.oldPrice || item?.attributes?.price + 20}
          </h3>
          <h3 className="card__price">${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
