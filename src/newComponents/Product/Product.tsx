import "./product.css";
import StarRatingComponent from "react-star-rating-component";
import { useState } from "react";

interface ProductProps {
  description: string;
  inStock: boolean;
  name: string;
  price: number;
  owner: number;
  productImage: any;
  stock: number;
  productDiscount?: number;
  shippingCost: number;
  createdAt: any;
  _id: number;
  rating: number; // Add the rating property to the interface
}

const Product = ({
  inStock,
  name,
  price,
  productImage,
  stock,
  productDiscount,
  rating, // Add the rating property to the component's props
}: ProductProps) => {
  const [hasBeenLiked, setHasBeenLiked] = useState(false);

  const likedSrc = hasBeenLiked
    ? "/assets/miniheart1.svg"
    : "/assets/miniheart.svg";


  return (
    <div className="product">
      <div className="product-top">
        {productDiscount ? (
          <span className="product_discount">-{productDiscount}%</span>
        ) : null}
        <img
          src={`data:image/png;base64,${productImage}`}
          alt="Product"
          className="product-image__main"
        />

        <div className="product-icon_container">
          <img
            src={likedSrc}
            alt="like"
            className="product-like"
            onClick={() => setHasBeenLiked(!hasBeenLiked)}
          />
          <img src="/assets/eye.svg" alt="like" className="product-eye" />
        </div>
        <div className="product-hover">Add To Cart</div>
      </div>

      <div className="product-bottom">
        <span className="product_name">{name}</span>
        <span className="product_price">N{price}</span>

        <div className="product-rating__container">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={rating} // Use the provided rating value
            starColor="#FFAD33"
            emptyStarColor="grey"
          />

          <span className="product-instock">
            {inStock ? stock : "(Out of Stock)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
