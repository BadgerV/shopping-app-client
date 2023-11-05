import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./login.css";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  const specialIsLoading = useSelector(
    (state: RootState) => state.userSlice.isSpecialLoading
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await dispatch(loginUser(formData));
    if (response.payload) {
      window.location.reload();
      navigate("/");
    }
  };

  return (
    <>
      {specialIsLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {" "}
          <Header />
          <div className="signup">
            <div className="signup-left">
              <img src="/assets/SideImage.png" alt="Image" />
            </div>
            <div className="signup-right">
              <div className="signup-right_inner">
                <span className="signup-big-text">Login to LagShop</span>
                <span className="signup-small-text">
                  Enter your details below
                </span>

                <form
                  action="submit"
                  className="signup-form"
                  onSubmit={handleSubmit}
                >
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="login-input"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                  <input
                    value={formData.password}
                    onChange={handleChange}
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                  <button
                    className="create-account_button"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? (
                      <img src="/assets/spinner.svg" alt="" />
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </form>

                <span className="already-have_account">
                  Don't have an account?{" "}
                  <Link to="/signup" className="link">
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
