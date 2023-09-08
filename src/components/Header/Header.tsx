import "./header.css";
import { Link } from "react-router-dom";
import { BsCart, BsSearch, BsSignIntersectionSideFill } from "react-icons/bs";

const Header = () => {
  const isSignedIn = true;
  const isAVendor = false;
  return (
    <div className="headerNew_container">
      <div className="newHeader_logoContainer">
        <span className="newHeader_logoText">Lag Shop</span>
      </div>

      <div className="headerSearchContainer">
        <input
          type="text"
          className="header-search"
          placeholder="Search Product"
        />
        <BsSearch className="header-search_icon" />
      </div>

      {isSignedIn ? (
        <div className="header-left-component">
          <button className="header-left-button">
            <BsCart size={30} />
            <span>2</span>

            <div className="hover-cart-item">
              <div className="hover-cart-item-links">
                <a className="hover-cart-item-link">My Profile</a>

                <a className="hover-cart-item-link">Transaction History</a>
                <a className="hover-cart-item-link">Settings</a>
              </div>
            </div>
          </button>

          <div className="header-left-img-container">
            <img
              src="/assets/image12.jpg"
              alt="Profile Img"
              className="header-left-image"
            />

            <div className="hover-profile-image-links">
              <a className="hover-profile-image-links">My Profile</a>
              {isAVendor ? (
                <></>
              ) : (
                <a className="hover-profile-image-links">Become a Vendor</a>
              )}
              <a className="hover-profile-image-links">Transaction History</a>
              <a className="hover-profile-image-links">Settings</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="newHeaderButtonContainer">
          <Link to="/login" className="link-buttons newSignUpButton buttonNew ">
            Sign In
          </Link>

          <Link
            to="/signup"
            className="link-buttons newSignUpButton buttonNew "
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
