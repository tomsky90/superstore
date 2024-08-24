import Jacket from "../../assets/jacket.jpg";

// eslint-disable-next-line react/prop-types
const FeaturedProducts = ({ location }) => {
  return (
    <section className="featured">
      <h2 className="featured__heading">{location}</h2>
      <div className="featured__cards-wrapper">
        <div className="featured__card">
          <img src={Jacket} alt="jacket" />
          <p className="featured__name">Summer Jacket</p>
          <p className="featured__price">
            <span className="featured__old-price">£35</span>
            <span className="featured__new-price">£29.99</span>
          </p>
        </div>
        <div className="featured__card">
          <img src={Jacket} alt="jacket" />
          <p className="featured__name">Summer Jacket</p>
          <p className="featured__price">
            <span className="featured__old-price">£35</span>
            <span className="featured__new-price">£29.99</span>
          </p>
        </div>
        <div className="featured__card">
          <img src={Jacket} alt="jacket" />
          <p className="featured__name">Summer Jacket</p>
          <p className="featured__price">
            <span className="featured__old-price">£35</span>
            <span className="featured__new-price">£29.99</span>
          </p>
        </div>
        <div className="featured__card">
          <img src={Jacket} alt="jacket" />
          <p className="featured__name">Summer Jacket</p>
          <p className="featured__price">
            <span className="featured__old-price">£35</span>
            <span className="featured__new-price">£29.99</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
