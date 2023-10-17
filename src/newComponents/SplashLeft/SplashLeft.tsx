import "./splashLeft.css";
import { Link } from "react-router-dom";

const SplashLeft = () => {
  return (
    <div className="splash-left__container">
      <ul className="splash-left_header_links">
        <li className="header-center_link">
          <Link to="/signup" className="header-link">
            Sign up
          </Link>
        </li>

        <li className="header-center_link">
          <Link to="/signin" className="header-link">
            Sign in
          </Link>
        </li>
      </ul>
      <div className="splash-left__category">
        <span>Women's Fashion</span>
        <img src="/assets/dropdown.svg" alt="icon" />
      </div>
      <div className="splash-left__category">
        <span>Men's Fashion</span>
        <img src="/assets/dropdown.svg" alt="icon" />
      </div>
      <div className="splash-left__category">
        <span>Electronics</span>
      </div>
      <div className="splash-left__category">
        <span>Phones</span>
      </div>
      <div className="splash-left__category">
        <span>Home & Lifestyle</span>
      </div>
      <div className="splash-left__category">
        <span>Sports</span>
      </div>
      <div className="splash-left__category">
        <span>Goodies</span>
      </div>
      <div className="splash-left__category">
        <span>Health & Beauty</span>
      </div>
      <div className="splash-left__category">
        <span>Edibles</span>
      </div>
      <div className="splash-left__category">
        <span>Car</span>
      </div>
      <div className="splash-left__category">
        <span>Physical Service</span>
      </div>
    </div>
  );
};

export default SplashLeft;
