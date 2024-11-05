import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

import { scrollToTop } from "../../utils/scroll";

const Product = () => {
  const dispatch = useDispatch();
  const itemId = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [qunatity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`product.php?id=${itemId}`);
  const [showAlert, setShowAlert] = useState(false);

  const displayAlert = () => {
    scrollToTop();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  return (
    <div className="product-page">
      <div
        className={
          showAlert
            ? `product-page__alert product-page__alert--active`
            : `product-page__alert`
        }
      >
        Added To Cart
      </div>
      {loading && "Loading"}
      {error && "sorry something went wrong"}
      {data && (
        <>
          {" "}
          <div className="product-page__left">
            <div className="product-page__images">
              <img
                className="product-page__thumb-img"
                src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.img}
                alt={data?.name}
                onClick={() => setSelectedImg("img")}
              />
              <img
                className="product-page__thumb-img"
                src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.img2}
                alt={data?.name}
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="product-page__main-img-wrapper">
              <img
                className="product-page__main-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.[selectedImg]
                }
                alt={data?.product_name}
              />
            </div>
          </div>
          <div className="product-page__right">
            <h1 className="product-page__h1">{data?.product_name}</h1>
            <span className="product-page__price-container">
              £{data?.price}
            </span>
            <p className="product-page__description">{data?.description}</p>
            <div className="product-page__quantity">
              <button
                className="product-page__qty-btn"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {qunatity}
              <button
                className="product-page__qty-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="product-page__add-to-cart-btn"
              onClick={() => {
                dispatch(
                  add({
                    title: data?.product_name,
                    price: data?.price,
                    description: data?.description,
                    qty: qunatity,
                    id: data?.id,
                    img: data?.img,
                  })
                );

                displayAlert();
              }}
            >
              {" "}
              Add to cart
            </button>

            <div className="product-page__info">
              <span>
                Product Type: {data.category_name}
                {", "}
                {data.is_new !== 0 ? "New Collection" : null}
              </span>
            </div>
            <hr className="product-page__hr" />
            <div className="product-page__info">
              <span>DESCRIPTION</span>
              <p className="product-page__description">{data?.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
