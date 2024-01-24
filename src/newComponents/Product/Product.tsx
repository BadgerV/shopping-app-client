import "./product.css";
import { Rating } from "@mui/material";
import { useState } from "react";
import MoreDetails from "../MoreDetails/MoreDetails";
import { formatNumberToCurrency } from "../../utils/utilsFunctions";
import { navigateTo } from "../../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectParticularProduct } from "../../redux/slice/productSlice";

interface ProductProps {
  description: string;
  inStock: boolean;
  name: string;
  price: number;
  owner: any;
  productImage: any;
  stock: number;
  productDiscount?: number;
  shippingCost: number;
  createdAt: any;
  _id: number;
  rating: number; // Add the rating property to the interface
  productCategories: [string];
  originalProductPrice: number;
}

const Product = ({
  inStock,
  name,
  price,
  productImage,
  stock,
  productDiscount,
  rating, // Add the rating property to the component's props
  description,
  owner,
  shippingCost,
  createdAt,
  _id,
  productCategories,
  originalProductPrice,
}: ProductProps) => {
  const [hasBeenLiked, setHasBeenLiked] = useState(false);
  const [modal, setModal] = useState(false);

  const likedSrc = hasBeenLiked
    ? "/assets/miniheart1.svg"
    : "/assets/miniheart.svg";
  const handleEyeClickButton = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const gotoProductPage = () => {
    console.log("workwing");
    dispatch(
      selectParticularProduct({
        inStock,
        name,
        price,
        productImage,
        stock,
        productDiscount,
        rating, // Add the rating property to the component's props
        description,
        owner,
        shippingCost,
        createdAt,
        _id,
        productCategories,
        originalProductPrice,
      })
    );
    navigate(`/product/${_id}`);
  };

  return (
    <>
      {modal && (
        <MoreDetails
          name={name}
          inStock={inStock}
          price={price}
          originalProductPrice={originalProductPrice}
          productImage={productImage && productImage[0]}
          productDiscount={productDiscount}
          stock={stock}
          rating={rating}
          description={description}
          owner={owner}
          shippingCost={shippingCost}
          createdAt={createdAt}
          _id={_id}
          setIsModalOpen={setModal}
          productCategories={productCategories}
        />
      )}
      <div className="product">
        <div className="product-top">
          {productDiscount ? (
            <span className="product_discount">-{productDiscount}%</span>
          ) : null}
          <img
            src={`data:image/png;base64,${productImage && productImage[0]}`}
            alt="Product"
            className="product-image__main"
            onClick={gotoProductPage}
          />
          <div className="product-icon_container">
            <img
              src={likedSrc}
              alt="like"
              className="product-like"
              onClick={() => setHasBeenLiked(!hasBeenLiked)}
            />
            <img
              src="/assets/eye.svg"
              alt="like"
              className="product-eye"
              onClick={() => handleEyeClickButton()}
            />
          </div>
          <div className="product-hover">
            <img src="/assets/CartIconImage.svg" alt="" />
            <span>Add To Cart</span>
          </div>
        </div>

        <div className="product-bottom">
          <span className="product_name">{name}</span>
          <span className="product_price">
            &#x20A6;{formatNumberToCurrency(price)}
          </span>
          <span className="product-price_striked-through">
            &#x20A6;{formatNumberToCurrency(originalProductPrice)}
          </span>

          <div className="product-rating__container">
            {rating ? (
              <Rating
                name="size-large"
                size="large"
                defaultValue={+rating}
                precision={1}
                readOnly
              />
            ) : (
              <span style={{ fontSize: "0.7em" }}>No ratings yet</span>
            )}

            <span className="product-instock" style={{ fontSize: "0.65em" }}>
              {inStock ? stock : "(Out of Stock)"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
