import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/list/List";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [visibility, setVisibility] = useState({
    element1: false,
    element2: false,
    element3: false,
  });

  const toggleVisibility = (element) => {
    console.log(visibility);
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [element]: !prevVisibility[element],
    }));
  };

  return (
    <div className="products-page">
      <img
        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="bnner image"
        className="products-page__banner-img"
      />
      <div className="products-page__left">
        <div className="products-page__filter-item">
          <div className="products-page__heading-wrapper">
            <button
              onClick={() => toggleVisibility("element1")}
              className="products-page__show-btn"
            >
              {visibility.element1
                ? "Product Categories -"
                : "Product Categories +"}
            </button>
          </div>

          <div
            className={
              visibility.element1
                ? "products-page__inputs-wrapper"
                : "products-page__inputs-wrapper--hide"
            }
          >
            <div className="products-page__input-wrapper">
              <input type="checkbox" id="1" value={1} />
              <label className="products-page__label" htmlFor="1">
                Shoes
              </label>
            </div>
            <div className="products-page__input-wrapper">
              <input type="checkbox" id="2" value={2} />
              <label className="products-page__label" htmlFor="2">
                Skirts
              </label>
            </div>
            <div className="product-page__input-wrapper">
              <input type="checkbox" id="3" value={3} />
              <label className="products-page__label" htmlFor="3">
                Coats
              </label>
            </div>
          </div>
        </div>
        <div className="products-page__filter-item">
          <div className="products-page__heading-wrapper">
            <button
              onClick={() => toggleVisibility("element2")}
              className="products-page__show-btn"
            >
              {visibility.element2 ? "Filter by price -" : "Filter by price +"}
            </button>
          </div>

          <div
            className={
              visibility.element2
                ? "products-page__inputs-wrapper"
                : "products-page__inputs-wrapper--hide"
            }
          >
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="products-page__filter-item">
          <div className="products-page__heading-wrapper">
            <button
              onClick={() => toggleVisibility("element3")}
              className="products-page__show-btn"
            >
              {visibility.element3 ? "Sort by -" : "Sort by +"}
            </button>
          </div>
          <div
            className={
              visibility.element3
                ? "products-page__inputs-wrapper"
                : "products-page__inputs-wrapper--hide"
            }
          >
            <div className="products-page__input-wrapper">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => setSort("asc")}
              />
              <label className="products-page__label" htmlFor="asc">
                Price (Lowest first)
              </label>
            </div>
            <div className="products-page__input-wrapper">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort("desc")}
              />
              <label className="products-page__label" htmlFor="desc">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="products-page__right">
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
