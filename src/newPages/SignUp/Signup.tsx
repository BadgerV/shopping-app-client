import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./signup.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../newComponents/LoadingComponent/LoadingComponent";

const Signup = () => {
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
  const error = useSelector((state: RootState) => state.userSlice.signupError);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(formData));
    } catch (error) {
      console.log(error);
    }
  };

  if (isSuccess) {
    navigate("/");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(`${name} : ${value}`)
  };

  return (
    <>
      {specialIsLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Header />

          <div className="signup">
            <div className="signup-left">
              <img src="/assets/SideImage.png" alt="Image" />
            </div>
            <div className="signup-right">
              <div className="signup-right_inner">
                <span className="signup-big-text">Create an account</span>
                <span className="signup-small-text">
                  Enter your details below
                </span>

                <div className="error-container">
                  {error ? (
                    <span className="error-message">{error}</span>
                  ) : (
                    <></>
                  )}
                </div>

                <form
                  action="submit"
                  onSubmit={(e) => handleSubmit(e)}
                  className="signup-form"
                >
                  <input
                    value={formData.firstName}
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                    className="signup-form-input"
                  />
                  <input
                    value={formData.lastName}
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                    className="signup-form-input"
                  />
                  <input
                    value={formData.email}
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    className="signup-form-input"
                  />

                  <input
                    value={formData.password}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    className="signup-form-input"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    className="signup-form-input"
                  />
                  <button
                    className="create-account_button"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <img
                        src="/assets/spinner.svg"
                        alt="spinner"
                        className="spinner"
                      />
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
      )}
    </>
  );
};

export default Signup;
