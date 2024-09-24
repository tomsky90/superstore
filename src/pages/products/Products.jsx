import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = useParams().id;
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

  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubcategories(
      isChecked
        ? [...selectedSubcategories, value]
        : selectedSubcategories.filter((item) => item !== value)
    );
  };

  const {
    data: subcategories,
    loading: subcategoriesLoading,
    error: subcategoriesError,
  } = useFetch(`/subcategories?[filters][categories][title][$eq]=${catId}`);

  const { data: category } = useFetch(
    `/categories?[filters][title][$eq]=${catId}&populate=*`
  );

  return (
    <div className="products-page">
      <div className="products-page__banner-img-wrapper">
        <h3 className="products-page__banner-heading">
          {category && category[0]?.attributes?.description}
        </h3>
        {category && (
          <img
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              category[0]?.attributes?.img?.data?.attributes?.url
            }
            alt="bnner image"
            className="products-page__banner-img"
          />
        )}
      </div>

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
            {subcategories?.map((item) => (
              <div key={item.id} className="products-page__input-wrapper">
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleOnChange}
                />
                <label className="products-page__label" htmlFor="1">
                  {item.attributes.title}
                </label>
              </div>
            ))}
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
        {subcategoriesLoading ? (
          "Loading Products"
        ) : subcategoriesError ? (
          "Sorry something went wrong"
        ) : (
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            selectedSubCategories={selectedSubcategories}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
