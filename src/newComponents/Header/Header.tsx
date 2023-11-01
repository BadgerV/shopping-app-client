import "./header.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import { useSelector } from "react-redux";

interface MyComponentProps {
  showElement?: boolean; // Prop is optional and defaults to true
}

const Header: React.FC<MyComponentProps> = ({ showElement = true }) => {
  interface UserProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  const [theUser, setUser] = useState<null | UserProps>(null);
  const user = useSelector((state: RootState) => state.userSlice.user);

  useEffect(() => {
    setUser(user);
  }, [user]);

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
          <li className="header-center_link">
            <Link to="/categories" className="header-link">
              Categories
            </Link>
          </li>
          <li className="header-center_link">
            <Link to="/" className="header-link">
              Vendors
            </Link>
          </li>

          {user?.isVendor == "true" ? (
            showElement && (
              <li className="header-center_link">
                <Link to="/my-vendor-page" className="header-link">
                  My Page
                </Link>
              </li>
            )
          ) : (
            <></>
          )}

          {!theUser ? (
            <>
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
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="header-right" style={!user ? { marginRight: "8em" } : {}}>
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
              <img
                style={user.avatar ? { borderRadius: "50%" } : {}}
                src={
                  user.avatar
                    ? `data:image/png;base64,${user.avatar}`
                    : "/assets/avatar.jpg"
                }
                alt="Avatar Image"
              />

              <div className="avatar-hoverable">
                <div className="avatar-hoverable-comp">
                  <img src="/assets/user-icon.svg" alt="icon" />
                  <Link className="header-link-white" to="/profile">
                    Manage My Account
                  </Link>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/package-icon.svg" alt="icon" />
                  <Link className="header-link-white" to="/orders">
                    My Orders
                  </Link>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/star-icon.svg" alt="icon" />
                  <Link className="header-link-white" to="/reviews">
                    My Reviews
                  </Link>
                </div>
                <div className="avatar-hoverable-comp">
                  <img src="/assets/logout-icon.svg" alt="icon" />
                  <Link className="header-link-white" to="/signin">
                    Logout
                  </Link>
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
