import Footer from "../../newComponents/Footer/Footer";
import Header from "../../newComponents/Header/Header";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
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

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button className="create-account_button">Create Account</button>

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
