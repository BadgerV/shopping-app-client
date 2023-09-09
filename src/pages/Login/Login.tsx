import "./login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
// import HeaderNew from "../../components/HeaderNew/HeaderNew";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await dispatch(loginUser(formData));
      console.log(response);

      if (response.payload) {
        navigate("/");
      }
    } catch (error : any) {
      console.log(error.message);
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
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="login_input"
                placeholder="Email"
                id="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                value={formData.password}
                onChange={handleChange}
                className="login_input"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
              <button className="login_button" type="submit">
                Log In
              </button>
            </form>
            <Link to="/signup" className="link">
              <span>Don't have an account?</span>
              <button className="link-btn">Sign up.</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
