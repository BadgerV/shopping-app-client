import Header from "../../newComponents/Header/Header";
import Product from "../../newComponents/Product/Product";
import "./categoryPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import { GetCategoriesProduct } from "../../redux/slice/productSlice";
import { returnLetters } from "../../utils/utilsFunctions";
import { useState } from "react";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [customIsLoading, setCustomIsLoading] = useState(true);
  console.log(customIsLoading);

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
  };

  useEffect(() => {
    getCategoriesProduct();
  }, []);

  //THE LANDING ARRAY FOR THE PRODUCTS GOTTEN FROM THE REDUX
  const ownersIDArray =
    categoriesProducts?.map((user: any) => user.owner) || [];

  //FETCHES THE OWNERS OF THE PRODUCTS, SINCE WE HAVE THE ID IN THE PRODUCTS
  const fetchOwners = async () => {
    await dispatch(getUser(ownersIDArray));
  };

  //SETS THE USEFFECT TO FECTH THE OWNERS AS SOON AS IT SHOWS UP
  useEffect(() => {
    categoriesProducts ? fetchOwners() : console.log("still loading");
    if (categoriesProducts.length != 0) {
      fetchOwners();
      setCustomIsLoading(false);
    } else {
      setCustomIsLoading(true);
    }
  }, [categoriesProducts]);

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
