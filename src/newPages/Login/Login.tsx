import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./login.css";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = useSelector(
    (state: RootState) => state.userSlice.isLoading
  );

  const user = useSelector((state: RootState) => state.userSlice);

  useEffect(() => {
    const userToken = JSON.stringify(user.userToken);

    localStorage.setItem("token", userToken);
  }, [user]);

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

    try {
      const response = await dispatch(loginUser(formData));
      console.log(response);
      if (response.payload) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <div className="signup">
        <div className="signup-left">
          <img src="/assets/SideImage.png" alt="Image" />
        </div>
        <div className="signup-right">
          <div className="signup-right_inner">
            <span className="signup-big-text">Login to LagShop</span>
            <span className="signup-small-text">Enter your details below</span>

            <form
              action="submit"
              className="signup-form"
              onSubmit={handleSubmit}
            >
              <input
                value={formData.email}
                type="email"
                name="name"
                placeholder="Email"
                className="login-input"
                onChange={(e) => handleChange(e)}
              />
              <input
                value={formData.password}
                type="password"
                name="password"
                placeholder="Password"
                className="login-input"
                onChange={(e) => handleChange(e)}
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
  );
};

export default Login;
