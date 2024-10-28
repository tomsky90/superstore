import { Link } from "react-router-dom";
import bgcImage from "../../assets/categoriesBackground.jpg";
import kidsFashion from "../../assets/kids-fashion.jpg";
import menFashion from "../../assets/men-fashion.jpg";
import womenFashion from "../../assets/women-fashion.jpg";
import { scrollToTop } from "../../utils/scroll";

const Categories = () => {
  return (
    <section className="categories">
      <img
        src={bgcImage}
        alt="family on holidays"
        className="categories__bgc-image"
      />

      <div className="categories__text-wrapper">
        <h2 className="categories__heading">Summer Holidays</h2>
        <p className="categories__text">
          Get everything you need, for whole family
        </p>
        <Link
          onClick={() => {
            scrollToTop();
          }}
          to="/categories/sale"
          className="categories__linK"
        >
          NOW ON SALE
        </Link>
      </div>
      <div className="categories__cards-wrapper">
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={womenFashion}
            alt="women fashion"
          />
          <div className="categories__card-text-wrapper">
            <h2 className="categories__card-heading">For Women</h2>
            <p className="categories__card-text">
              Get everything you need this summer
            </p>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/categories/women"
              className="categories__card-linK"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={menFashion}
            alt="men fashion"
          />
          <div className="categories__card-text-wrapper">
            <h2 className="categories__card-heading">For Men</h2>
            <p className="categories__card-text">
              Stay comfortable whatever the weather
            </p>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/categories/men"
              className="categories__card-linK"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={kidsFashion}
            alt="kids fashion"
          />
          <div className="categories__card-text-wrapper">
            <h2 className="categories__card-heading">For Kids</h2>
            <p className="categories__card-text">
              Kids clothes in great prices
            </p>
            <Link
              onClick={() => {
                scrollToTop();
              }}
              to="/categories/kids"
              className="categories__card-linK"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
