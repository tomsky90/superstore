import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import NewsLetter from "../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <FeaturedProducts location={"featured"} />
      <Categories />
      <FeaturedProducts location={"trending"} />
      <NewsLetter />
    </div>
  );
};

export default Home;
