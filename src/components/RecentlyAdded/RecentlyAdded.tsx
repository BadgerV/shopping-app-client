import "./recentlyAdded.css";
import NewProduct from "../NewProduct/NewProduct";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";

const products = [
  {
    name: "Blue T-Shirt",
    price: 5000,
    description:
      "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
    rating: 3,
  },
  {
    name: "The Last Perfume",
    price: 2500,
    description:
      "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
    rating: 2,
  },
  {
    name: "Blue T-Shirt",
    price: 5000,
    description:
      "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
    rating: 5,
  },
  {
    name: "The Last Perfume",
    price: 2500,
    description:
      "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
    rating: 3,
  },
  {
    name: "Blue T-Shirt",
    price: 5000,
    description:
      "This will make you look fly, with adjustable flaps, bulletproof and jetpack functionalities, this shirt is all you need",
    rating: 1,
  },
  {
    name: "The Last Perfume",
    price: 2500,
    description:
      "With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity,With this perfume on you self, you will feel invincible all day long, lasts up to 32 hours, don't waste this nice opportunity",
    rating: 4,
  },
];

const RecentlyAdded = () => {
  return (
    <div className="Recently">
      <span className="recentlyAdded_header">Recently Added</span>

      <div className="RecentlyAdded">
        {products.map((prod, index) => {
          return <NewProduct {...prod} key={index} />;
        })}
        <div className="reacently-added-more">
          <Link to="/more" className="link">
            <div className="reacently-added-more-inner">
              <span className="more-button">See more</span>{" "}
              <FcNext className="icon-button" color = "white" size = {20}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
