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
import Footer from "../../newComponents/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import { getRandomProducts } from "../../redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRandomProducts());
  }, []);

  const [menu, setMenu] = useState(false);

  const isLoadingRandomProducts = useSelector(
    (state: RootState) => state.productSlice.isLoadingRandomProducts
  );

  return (
    <>
      {isLoadingRandomProducts ? (
        <LoadingComponent />
      ) : (
        <div className="home-style">
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
