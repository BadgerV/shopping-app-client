import Header from "../../newComponents/Header/Header";
import Product from "../../newComponents/Product/Product";
import "./categoryPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import { GetCategoriesProduct } from "../../redux/slice/productSlice";
import {
  returnLetters,
} from "../../utils/utilsFunctions";
import { useState } from "react";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [customIsLoading, setCustomIsLoading] = useState(true);

  const title = returnLetters(id ? id : "");

  //COMPONENTS COMING FROM THE REDUX STATE

  //   const isLoadingProduct = useSelector(
  //     (state: RootState) => state.userSlice.isLoadingProduct
  //   );
  const categoriesProducts = useSelector(
    (state: RootState) => state.productSlice.categoriesProduct
  );

  //CALLING THE GET-CATEGORIES-PRODUCT TO GET THE PRODUCTS THAT FALL UNDER THIS CATEGORY
  const getCategoriesProduct = async () => {
    await dispatch(GetCategoriesProduct(id));
    setCustomIsLoading(false);
  };

  useEffect(() => {
    getCategoriesProduct();
  }, []);

  return (
    <>
      {customIsLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {categoriesProducts.length == 0 ? (
            <span>No products in this category yet</span>
          ) : (
            <>
              <Header />

              <div className="category-page">
                <span className="category-page_title">{title}</span>

                <div className="category-page_products">
                  {categoriesProducts.map((product: any, index: number) => {
                    return <Product key={index} {...product} />;
                  })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CategoryPage;
