import Header from "../../components/Header/Header";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
import Splash from "../../components/Splash/Splash";
import Categories from "../../components/Categories/Categories.tsx";
import "./home.css";

const Home = () => {
  return (
    <div className="home-style">
      <Header />
      <Splash />
      <RecentlyAdded />
      <PopularProducts />
      <Categories />
    </div>
  );
};

export default Home;
