import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./login.css";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";
import { removeLoginAndSignUpErrors } from "../../redux/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  const specialIsLoading = useSelector(
    (state: RootState) => state.userSlice.isSpecialLoading
  );

  const isSuccess = useSelector(
    (state: RootState) => state.userSlice.isSuccess
  );

  const error = useSelector((state: RootState) => state.userSlice.loginError);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(removeLoginAndSignUpErrors());
    e.preventDefault();
    await dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(removeLoginAndSignUpErrors());
  }, []);

  return (
    <>
      {specialIsLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />
          <div className="signin">
            <div className="signin-left">
              <img src="/assets/SideImage.png" alt="Image" />
            </div>
            <div className="signin-right">
              <div className="signin-right_inner">
                <span className="signin-big-text">Login to LagShop</span>
                <span className="signin-small-text">
                  Enter your details below
                </span>
                <div className="error-container">
                  {error ? (
                    <span className="error-message">
                      {error === "error.response is undefined"
                        ? "An error occured. Please try again"
                        : error}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <form
                  action="submit"
                  className="signin-form"
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
                    className="login-button"
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
                  <Link to="/signin" className="link">
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
