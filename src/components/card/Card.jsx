/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card__img-wrapper">
          {item.isNew && (
            <span className="card__new-product-label">New Seson</span>
          )}
          <img
            className="card__img card__img--main"
            src={item.img}
            alt={item.title}
          />
          {item.img2 && (
            <img
              className="card__img card__img--second"
              src={item.img2}
              alt={item.title}
            />
          )}
        </div>
        <h2 className="card__h2">{item.title}</h2>
        <div className="card__prices">
          <h3 className="card__price card__price--old">${item.oldPrice}</h3>
          <h3 className="card__price">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
