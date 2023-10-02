import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUp from "./pages/Signup/SIgnup";
// import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ProtectedRoutes from "./utils/utilsFunctions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { verifyToken, verifyIfToken } from "./redux/slice/userSlice";
import Signup from "./newPages/SignUp/Signup";
import Login from "./newPages/Login/Login";
// import Signup from "./newPages/SignUp/Signup";
// import Login from "./newPages/Login/Login";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const theToken = localStorage.getItem("token");

  dispatch(verifyToken);

  const asyncFunction = async () => {
    try {

      await dispatch(verifyToken());
    } catch (error) {
      console.log(error);
    }
  };

  if (!user && theToken) {
    asyncFunction();
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
