// import Header from "../../components/Header/Header";
// import PopularProducts from "../../components/PopularProducts/PopularProducts";
// import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
// import Splash from "../../components/Splash/Splash";
// import Categories from "../../components/Categories/Categories.tsx";

import Header from "../../newComponents/Header/Header";
import SplashLeft from "../../newComponents/SplashLeft/SplashLeft";
import SplashMain from "../../newComponents/SplashMain/SPlashMain";
import "./home.css";

const Home = () => {
  return (
    <div className="home-style">
      {/* <Header />
      <Splash />
      <RecentlyAdded />
      <PopularProducts />
      <Categories /> */}

      <Header />

      <div className="home-splash">
        <div className="splash-left">
          <SplashLeft />
        </div>
        <SplashMain />
        <div className="splash-right"></div>{" "}
      </div>
    </div>
  );
};

export default Home;
