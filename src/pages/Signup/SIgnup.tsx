import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./signup.css";
import "../login/login.css";

import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
import { registerUser } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import HeaderNew from "../../components/HeaderNew/HeaderNew";

export const SignUp = () => {
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

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Started already")
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
  };

  return (
    <>
      <div className="login">
        <div className="innner-form">
          <div className="new-header">
            <NewHeader />
          </div>
          <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="name">First Name</label>
              <input
                value={formData.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
                placeholder="First Name"
                className="login_input"
              />
              <label htmlFor="name">Last Name</label>
              <input
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className="login_input"
              />
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                className="login_input"
              />
              <label htmlFor="password">Password</label>
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                name="password"
                className="login_input"
              />
              <button className="login_button" disabled = {isLoading}>
                {isLoading ? (
                  <img src="/assets/spinner.svg" alt="spinner" />
                ) : (
                  <span>Sign Up</span>
                )}
              </button>
            </form>
            <Link to="/login" className="link">
              <span>Already have an account?</span>
              <button className="link-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
