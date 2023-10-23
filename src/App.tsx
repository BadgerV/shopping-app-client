import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUp from "./pages/Signup/SIgnup";
// import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/Profile";
import Profile from "./newPages/Profile/Profile";
import ProtectedRoutes, {
  DenyLoginPage,
  DenySignUpPage,
} from "./utils/utilsFunctions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { verifyToken } from "./redux/slice/userSlice";
import Signup from "./newPages/SignUp/Signup";
import Login from "./newPages/Login/Login";
// import { useEffect, useState } from "react";
import BecomeVendor from "./newPages/BecomeVendor/BecomeVendor";
import MyVendorPage from "./newPages/MyVendorPage/MyVendorPage";
// import Signup from "./newPages/SignUp/Signup";
// import Login from "./newPages/Login/Login";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const theToken = localStorage.getItem("token");

  const asyncFunction = async () => {
    await dispatch(verifyToken());
  };

  if (!user && theToken) {
    console.log("blast off");
    asyncFunction();
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/become-vendor" element={<BecomeVendor />} />
            <Route path = "my-vendor-page" element= {<MyVendorPage />} />
          </Route>

          <Route element={<DenyLoginPage />}>
            <Route path="/signin" element={<Login />} />
          </Route>

          <Route element={<DenySignUpPage />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
