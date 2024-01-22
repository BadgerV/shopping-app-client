import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { NavigateUserToPendingPage } from "./utils/utilsFunctions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { verifyToken } from "./redux/slice/userSlice";
import { useEffect } from "react";
import {
  GetProductCategories,
  getRandomProducts,
} from "./redux/slice/productSlice";
import { lazy, Suspense } from "react";
import LoadingComponent from "./newComponents/LoadingComponent/LoadingComponent";
import PostProductSucessPage from "./newPages/PostProductSucesssPage/PostProductSucessPage";

const Signup = lazy(() => import("./newPages/SignUp/Signup"));
const Login = lazy(() => import("./newPages/Login/Login"));
const BecomeVendor = lazy(() => import("./newPages/BecomeVendor/BecomeVendor"));
const MyVendorPage = lazy(() => import("./newPages/MyVendorPage/MyVendorPage"));
const CategoryPage = lazy(() => import("./newPages/CategoryPage/CategoryPage"));
const ProductPage = lazy(() => import("./newPages/ProductPage/ProductPage"));
const Profile = lazy(() => import("./newPages/Profile/Profile"));
const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const theToken = localStorage.getItem("token");

  useEffect(() => {
    const asyncFunction = async () => {
      await dispatch(verifyToken());
    };

    dispatch(GetProductCategories());
    dispatch(getRandomProducts());

    if (!user && theToken) {
      asyncFunction();
    }
  }, []);
  return (
    <Router>
      <div className="app-container">
        <div className="app">
          <Suspense fallback={<LoadingComponent />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />

              <Route
                path="/profile"
                element={user != 0 ? <Profile /> : <Navigate to="/signin" />}
              />
              <Route
                path="/become-vendor"
                element={
                  user != 0 ? <BecomeVendor /> : <Navigate to="/signin" />
                }
              />
              <Route
                path="my-vendor-page"
                element={
                  user != 0 ? <MyVendorPage /> : <Navigate to="/signin" />
                }
              />
              <Route
                path="pending-vendor"
                element={NavigateUserToPendingPage(user)}
              />

              <Route
                path="success-page"
                element={
                  user.isVendor ? (
                    <PostProductSucessPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route path="/signin" element={<Login />} />

              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
