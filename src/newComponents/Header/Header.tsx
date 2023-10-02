import "./header.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";

const Header = () => {

  const [user, setUser] = useState(false);

  const data = useSelector((state: RootState) => state.userSlice);

  const checkIfUser = () => {
    if (data.user !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  useEffect(() => {
    checkIfUser();
  }, [data]);
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
