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
    listOfProducts ? fetchOwners() : console.log("still loading");
  }, [listOfProducts]);

  // const products = [
  //   {
  //     name: "Game Pad",
  //     price: 405,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: false,
  //     image: "/assets/image100.png",
  //   },
  //   {
  //     name: "Keyboard",
  //     price: 4002,
  //     discount: 20,
  //     rating: 3,
  //     inStock: 80,
  //     isLiked: false,
  //     image: "/assets/image101.png",
  //   },
  //   {
  //     name: "Monitor",
  //     price: 4003,
  //     discount: 20,
  //     rating: 1,
  //     inStock: 80,
  //     isLiked: false,
  //     image: "/assets/image102.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 4004,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: false,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 8000,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: true,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 8000,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: true,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 8000,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: true,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 8000,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: true,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Chair",
  //     price: 8000,
  //     discount: 20,
  //     rating: 4,
  //     inStock: 80,
  //     isLiked: true,
  //     image: "/assets/image103.png",
  //   },
  //   {
  //     name: "Monitor",
  //     price: 4003,
  //     discount: 20,
  //     rating: 1,
  //     inStock: 80,
  //     isLiked: false,
  //     image: "/assets/image102.png",
  //   },
  // ];
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
          // console.log(product)
          return <Product key={index} {...product} />;
        })}
      </div>

      <button className="explore-button_view-more">View All Products</button>
    </div>
  );
};

export default ExploreProducts;
