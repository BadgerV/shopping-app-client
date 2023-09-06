import "./header.css";
import { Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <div className="headerNew_container">
      <div className="newHeader_logoContainer">
        <span className="newHeader_logoText">Lag Shop</span>
      </div>

      <div className="headerSearchContainer">
        <input type="text" className="header-search"placeholder="Search Product" />
        <BsSearch className = "header-search_icon" />
      </div>


      <div className="newHeaderButtonContainer">
        <Link to="/login" className="link-buttons newSignUpButton buttonNew ">
          Sign In
        </Link>

        <Link to="/signup" className="link-buttons newSignUpButton buttonNew ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
