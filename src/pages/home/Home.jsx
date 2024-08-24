import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <FeaturedProducts location={"Featured"} />
      <Categories />
      <FeaturedProducts location={"Trending Now"} />
    </div>
  );
};

export default Home;
