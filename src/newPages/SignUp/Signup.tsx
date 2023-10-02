import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./signup.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await dispatch(registerUser(formData));
      // console.log(response);
      if (response.payload) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // console.log(`${name} : ${value}`)
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
            <span className="signup-big-text">Create an account</span>
            <span className="signup-small-text">Enter your details below</span>

            <form
              action="submit"
              onSubmit={handleSubmit}
              className="signup-form"
            >
              <input
                value={formData.firstName}
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
              <input
                value={formData.lastName}
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
              <input
                value={formData.email}
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />

              <input
                value={formData.password}
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
              />
              <button
                className="create-account_button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <img src="/assets/spinner.svg" alt="spinner" />
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>
            <span className="already-have_account">
              Already have an account?
              <Link to="/signin" className="link">
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
