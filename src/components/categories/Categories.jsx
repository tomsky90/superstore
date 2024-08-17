import { Link } from "react-router-dom";
import bgcImage from "../../assets/categoriesBackground.jpg";
import kidsFashion from "../../assets/kids-fashion.jpg";
import menFashion from "../../assets/men-fashion.jpg";
import womenFashion from "../../assets/women-fashion.jpg";

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
        <Link className="categories__linK">Shop All</Link>
      </div>
      <div className="categories__cards-wrapper">
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={womenFashion}
            alt="women fashion"
          />
        </div>
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={menFashion}
            alt="men fashion"
          />
        </div>
        <div className="categories__card">
          <img
            className="categories__card-img"
            src={kidsFashion}
            alt="kids fashion"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
