import "./login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
// import HeaderNew from "../../components/HeaderNew/HeaderNew";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="login">
        <div className="innner-form">
          <div className="new-header"><NewHeader /></div>

          <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="login_input"
                placeholder="Email"
                id="email"
                name="email"
              />
              <label htmlFor="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
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
