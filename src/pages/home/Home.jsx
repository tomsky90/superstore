import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import NewsLetter from "../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <FeaturedProducts location={"Featured"} />
      <Categories />
      <FeaturedProducts location={"Trending"} />
      <NewsLetter />
    </div>
  );
};

export default Home;
