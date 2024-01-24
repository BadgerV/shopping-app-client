import Header from "../../newComponents/Header/Header";
import "./productPage.css";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useState } from "react";
import Footer from "../../newComponents/Footer/Footer";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { getParticularProductWithId } from "../../redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import { imagefrombuffer } from "imagefrombuffer"; //first import

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsloading] = useState(true);
  const [particularProduct, setParticularProduct] = useState({});

  const loading = useSelector(
    (state: RootState) => state.productSlice?.particularProductLoading
  );

  const particularProductFromState = useSelector(
    (state: RootState) => state.productSlice?.particularProduct
  );

  const selectedProduct = useSelector(
    (state: RootState) => state.productSlice.selectedProduct
  );

  const getParticularProduct = async (id: any) => {
    await dispatch(getParticularProductWithId(id));
  };

  useEffect(() => {
    if (Object.keys(selectedProduct).length === 0) {
      getParticularProduct(id);
    } else {
      setParticularProduct(selectedProduct);
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    particularProductFromState &&
      setParticularProduct(particularProductFromState);
  }, [particularProductFromState]);

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (loading === false) {
      setIsloading(false);
    } else {
      setIsloading(true);
    }
  }, [loading]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />
          <div className="product-page_container">
            <div className="product-page_product-history-links">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span>{particularProduct?.name}</span>
            </div>

            <div className="product-page_main">
              <div className="product-page_main-left">
                <img
                  src={imagefrombuffer({
                    type: particularProduct.productImage[0]?.type,
                    data: particularProduct.productImage[0]?.data,
                  })}
                />
              </div>
              <div className="product-page_main-right">
                <span className="product-page_product-name">
                  {particularProduct?.name}
                </span>

                <div className="product-page_rating-div">
                  {particularProduct.rating ? (
                    <Rating
                      name="size-large"
                      defaultValue={+particularProduct?.rating}
                      size="large"
                      precision={1}
                      readOnly
                    />
                  ) : (
                    <span style={{ fontSize: "0.9em" }}>No ratings yet</span>
                  )}

                  <span className="product-page_number-of-reviews">
                    (150 Reviews)
                  </span>

                  <span>|</span>
                  <span className="product-page_in-stock">In Stock</span>
                </div>

                <span className="product-page_price">
                  N{particularProduct?.price}
                </span>

                <span className="product-page_description">
                  {particularProduct?.description}
                </span>

                <hr className="product-page_hr" />

                <div className="product-page-row">
                  <div className="product-page_plus-minus">
                    <span
                      className="product-page_minus-icon"
                      onClick={decrementCount}
                    >
                      <img src="/assets/icon-minus.png" alt="" />
                    </span>
                    <span className="product-page_number-of-items">
                      {count}
                    </span>
                    <span
                      className="product-page_plus-icon"
                      onClick={incrementCount}
                    >
                      <img src="/assets/icon-plus.png" alt="" />
                    </span>
                  </div>

                  <button className="product-page_buy-button">Buy Now</button>

                  <div className="product-page_heart-image">
                    <img src="/assets/miniheart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ProductPage;
