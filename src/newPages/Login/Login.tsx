import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
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

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="create-account_button">Create Account</button>

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
