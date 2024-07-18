import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
