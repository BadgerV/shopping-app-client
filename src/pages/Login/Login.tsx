import "./login.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
import { RootState } from "../../redux/store";
// import HeaderNew from "../../components/HeaderNew/HeaderNew";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //adding frivolous comments

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
              <button
                className="login_button"
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
