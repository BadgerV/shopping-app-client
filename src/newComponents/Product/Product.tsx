import "./product.css";
import StarRatingComponent from "react-star-rating-component";
import { useState } from "react";

// name : "Chair",
// price : 4004,
// discount : 20,
// rating : 2,
// inStock : 80,
// isLiked : false,
// image : "/assets/image104"

interface ProductProps {
  name: string;
  price: number;
  discount: number;
  rating: number;
  inStock: number;
  isLiked: boolean;
  image: string;
}

const Product = ({
  name,
  price,
  discount,
  rating,
  inStock,
  isLiked,
  image,
}: ProductProps) => {
  const [hasBeenLiked, setHasBeenLiked] = useState(isLiked);

  const likedSrc = hasBeenLiked
    ? "/assets/miniheart1.svg"
    : "/assets/miniheart.svg";
  return (
    <div className="product">
      <div className="product-top">
        <span className="product_discount">-{discount}%</span>
        <img src={image} alt="Product" className="product-image__main" />
        <img
          src={likedSrc}
          alt="like"
          className="product-like"
          onClick={() => setHasBeenLiked(!hasBeenLiked)}
        />
        <img src="/assets/eye.svg" alt="like" className="product-eye" />
        <div className="product-hover">Add To Cart</div>
      </div>

      <div className="product-bottom">
        <span className="product_name">{name}</span>
        <span className="product_price">N {price}</span>

        <div className="product-rating__container">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={rating}
            starColor={`#FFAD33`}
            emptyStarColor={`grey`}
            
          />

          <span className="product-instock">({inStock})</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
