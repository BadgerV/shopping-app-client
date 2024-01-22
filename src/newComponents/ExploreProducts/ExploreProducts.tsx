import Product from "../Product/Product";
import "./exploreProducts.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUser } from "../../redux/slice/userSlice";

const ExploreProducts = () => {
  const listOfProducts = useSelector(
    (state: RootState) => state.productSlice.products.randomProducts
  );
  const ownersIDArray = listOfProducts?.map((user: any) => user.owner) || [];

  const dispatch = useDispatch<AppDispatch>();

  const fetchOwners = async () => {
    await dispatch(getUser(ownersIDArray));
  };

  useEffect(() => {
    listOfProducts && fetchOwners();
  }, [listOfProducts]);

  return (
    <div className="exploreProduct">
      <div className="explore-products_header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="explore-products__text">Explore</span>
      </div>

      <div className="explore-products_mini__container">
        <span className="explore-products_large_text">Explore Products </span>
      </div>

      <div className="explore-products_product__container">
        {listOfProducts?.map((product: any, index: number) => {
          return <Product key={index} {...product} />;
        })}
      </div>

      <button className="explore-button_view-more">View All Products</button>
    </div>
  );
};

export default ExploreProducts;
