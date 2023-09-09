import "./header.css";
import { Link } from "react-router-dom";
import { BsBell, BsBellSlash, BsCart, BsSearch } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";

const Header = () => {
  const isSignedIn = true;
  const isAVendor = true;

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
            <BsBell size={27}/>
          </button>
          <button className="header-left-button">
            <BsCart size={30} />
            <span>2</span>

            <div className="hover-cart-items">
              <CartItem />

              <div className="cart-item-bottom">
                <div className="cart-item-bottom-left">
                  <div>Quantity</div>
                  <div></div>
                </div>
                <div className="cart-item-bottom-right">
                  <div>Total</div>
                </div>
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
              <a className="hover-profile-image-link">My Profile</a>
              <a className="hover-profile-image-link">Notifications</a>
              {isAVendor ? (
                <></>
              ) : (
                <a className="hover-profile-image-link">Become a Vendor</a>
              )}
              <a className="hover-profile-image-link">Transaction History</a>
              <a className="hover-profile-image-link">Settings</a>
              <a className="hover-profile-image-link">Sign Out</a>
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
