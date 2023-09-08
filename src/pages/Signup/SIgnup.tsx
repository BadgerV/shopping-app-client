import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./signup.css";
import "../login/login.css";

import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
import { registerUser } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
// import HeaderNew from "../../components/HeaderNew/HeaderNew";

export const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    console.log("Blast off");
    e.preventDefault();
    try {
      const response = await dispatch(registerUser(formData));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
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
                onChange={handleChange}
                id="name"
                placeholder="First Name"
                className="login_input"
              />
              <label htmlFor="name">Last Name</label>
              <input
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                id="name"
                placeholder="Last Name"
                className="login_input"
              />
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="login_input"
              />
              <label htmlFor="password">Password</label>
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="login_input"
              />
              <button className="login_button" onClick={handleSubmit}>
                Sign Up
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
