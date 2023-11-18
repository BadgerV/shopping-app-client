import "./splashLeft.css";
import { Link } from "react-router-dom";
import { navigateTo } from "../../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";

const SplashLeft = () => {
  const navigate = useNavigate();
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
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Women's Fashion", navigate)}
      >
        <span>Women's Fashion</span>
        <img src="/assets/dropdown.svg" alt="icon" />
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Men's Fashion", navigate)}
      >
        <span>Men's Fashion</span>
        <img src="/assets/dropdown.svg" alt="icon" />
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Electronics", navigate)}
      >
        <span>Electronics</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Phones", navigate)}
      >
        <span>Phones</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Home & Lifestyle", navigate)}
      >
        <span>Home & Lifestyle</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Sports", navigate)}
      >
        <span>Sports</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Goodies", navigate)}
      >
        <span>Goodies</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Health & Beauty", navigate)}
      >
        <span>Health & Beauty</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Edibles", navigate)}
      >
        <span>Edibles</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Car", navigate)}
      >
        <span>Car</span>
      </div>
      <div
        className="splash-left__category"
        onClick={() => navigateTo("category/Physical Service", navigate)}
      >
        <span>Physical Service</span>
      </div>
    </div>
  );
};

export default SplashLeft;
