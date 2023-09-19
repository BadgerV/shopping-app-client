// import Header from "../../components/Header/Header";
// import PopularProducts from "../../components/PopularProducts/PopularProducts";
// import RecentlyAdded from "../../components/RecentlyAdded/RecentlyAdded";
// import Splash from "../../components/Splash/Splash";
// import Categories from "../../components/Categories/Categories.tsx";

import Header from "../../newComponents/Header/Header";
import SplashLeft from "../../newComponents/SplashLeft/SplashLeft";
import SplashMain from "../../newComponents/SplashMain/SplashMain";
import TodaySales from "../../newComponents/TodaySales/TodaySales";
import Categories from "../../newComponents/Categories/Categories";
import { useState } from "react";
import "./home.css";
import BestSelling from "../../newComponents/BestSelling/BestSelling";
import ExploreProducts from "../../newComponents/ExploreProducts/ExploreProducts";
import Featured from "../../newComponents/Featured/Featured";

const Home = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="home-style">
      {/* <Header />
      <Splash />
      <RecentlyAdded />
      <PopularProducts />
      <Categories /> */}

      <Header />

      <div className="home-splash">
        <img
          src="/assets/menu.svg"
          alt="menu"
          className="home-menu-icon"
          onClick={() => setMenu(!menu)}
        />
        <div
          className="splash-left"
          style={menu ? { left: "0" } : { left: "-100%" }}
        >
          <SplashLeft />
        </div>
        <div className="splash-right">
          <SplashMain />
        </div>
      </div>

      <TodaySales />
      <Categories />
      <BestSelling />
      <ExploreProducts />
      <Featured />
    </div>
  );
};

export default Home;
