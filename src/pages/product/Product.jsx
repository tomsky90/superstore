import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const itemId = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [qunatity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${itemId}?populate=*`);

  return (
    <div className="product-page">
      {loading && "Loading"}
      {error && "sorry something went wrong"}
      {data && (
        <>
          {" "}
          <div className="product-page__left">
            <div className="product-page__images">
              <img
                className="product-page__thumb-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImg("img")}
              />
              <img
                className="product-page__thumb-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="product-page__main-img-wrapper">
              <img
                className="product-page__main-img"
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt={data?.attributes?.title}
              />
            </div>
          </div>
          <div className="product-page__right">
            <h1 className="product-page__h1">{data?.attributes?.title}</h1>
            <span className="product-page__price-container">
              £{data?.attributes?.price}
            </span>
            <p className="product-page__description">
              {data?.attributes?.description}
            </p>
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
              onClick={() =>
                dispatch(
                  add({
                    title: data?.attributes?.title,
                    price: data?.attributes?.price,
                    description: data?.attributes?.description,
                    qty: qunatity,
                    id: data?.id,
                    img: data?.attributes?.img?.data?.attributes?.url,
                  })
                )
              }
            >
              {" "}
              Add to cart
            </button>

            <div className="product-page__info">
              <span>
                Product Type:{" "}
                {data.attributes.categories.data[0].attributes.title}
                {", "}
                {data.attributes.subcategories.data[0].attributes.title}
              </span>
              <span>
                Tag: {data.attributes.categories.data[0].attributes.title}
              </span>
            </div>
            <hr className="product-page__hr" />
            <div className="product-page__info">
              <span>DESCRIPTION</span>
              <p className="product-page__description">
                {data?.attributes?.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
