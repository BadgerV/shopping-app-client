import "./header.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useState(false);
  const fakeVerify = useSelector(
    (state: RootState) => state.userSlice.fakeVerify
  );

  useEffect(() => {
    setUser(fakeVerify);
  }, [fakeVerify]);

  return (
    <div className="header">
      <div className="header-left">
        <span>LagShop</span>
      </div>
      <div className="header-center">
        <ul className="header-center__links">
          <li className="header-center_link">
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li className="header-center_link">Categories</li>
          <li className="header-center_link">Vendors</li>

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
      </div>
      <div
        className="header-right"
        style={!user ? { marginRight: "8rem" } : {}}
      >
        <div className="header-right__searchbar">
          <input type="text" placeholder="What are you looking for?" />
          <img src="/assets/searchicon.png" alt="icon" />
        </div>

        {user ? (
          <>
            <div className="header-right__heart-icon">
              <img src="/assets/hearticon.svg" alt="icon" />
            </div>

            <div className="header-right__cart-icon">
              <img src="/assets/carticon.svg" alt="icon" />
            </div>

            <div className="header-left__avatar">
              <img src="/assets/avatar.jpg" alt="avatar" />

              <div className="avatar-hoverable">
                <div className="avatar-hoverable-comp">
                  <img src="/assets/user-mini.svg" alt="icon" />
                  <span>
                    <Link className="header-link-white" to="/profile">Manage My Account</Link>
                  </span>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/mallbag.svg" alt="icon" />
                  <span>My Orders</span>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/cancel.svg" alt="icon" />
                  <span>My Cancellations</span>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/reviews.svg" alt="icon" />
                  <span>My Reviews</span>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/logout.svg" alt="icon" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
