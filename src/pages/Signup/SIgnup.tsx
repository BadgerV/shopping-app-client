import { useState } from "react";
import "./signup.css";
import "../login/login.css";

import { Link } from "react-router-dom";
import NewHeader from "../../components/NewHeader/NewHeader";
// import HeaderNew from "../../components/HeaderNew/HeaderNew";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email);
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
              <label htmlFor="name">Name</label>
              <input
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Name"
                className="login_input"
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="login_input"
              />
              <label htmlFor="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="login_input"
              />
              <button className="login_button">Log In</button>
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
