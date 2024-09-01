import { useState } from "react";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qunatity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product-page">
      <div className="product-page__left">
        <div className="product-page__images">
          <img
            className="product-page__thumb-img"
            src={images[0]}
            alt="man wearing a jacket"
            onClick={() => setSelectedImg(0)}
          />
          <img
            className="product-page__thumb-img"
            src={images[1]}
            alt="man wearing a jacket"
            onClick={() => setSelectedImg(1)}
          />
        </div>
        <div className="product-page__main-img-wrapper">
          <img
            className="product-page__main-img"
            src={images[selectedImg]}
            alt="man wearing a jacket"
          />
        </div>
      </div>
      <div className="product-page__right">
        <h1 className="product-page__h1">Title</h1>
        <span className="product-page__price-container">$19</span>
        <p className="product-page__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          deleniti ex ad enim culpa possimus voluptate ipsam aliquam quasi et
          obcaecati voluptatum placeat, tempora perferendis tempore quos velit
          tenetur sunt.
        </p>
        <div className="product-page__quantity">
          <button
            className="product-page__qty-btn"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
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
        <button className="product-page__add-to-cart-btn"> Add to cart</button>

        <div className="product-page__info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr className="product-page__hr" />
        <div className="product-page__info">
          <span>DESCRIPTION</span>
          <hr className="product-page__hr" />
          <span>ADDITIONAL INFORMATION</span>
          <hr className="product-page__hr" />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
