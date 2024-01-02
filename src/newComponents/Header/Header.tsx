import "./header.css";
// import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { AppDispatch, RootState } from "../../redux/store";

// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";
import { useState, useEffect } from "react";
import {
  eraseListOfProducts,
  getProductOrUserWithName,
} from "../../redux/slice/productSlice";
import { useSelector } from "react-redux";
import SearchBarResults from "../SearchBarResults/SearchBarResults";

interface MyComponentProps {
  showElement?: boolean; 
}

const Header: React.FC<MyComponentProps> = ({ showElement = true }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<any>(null);
  const [trulyLoading, setTrulyLoading] = useState(true);

  const listOfProducts = useSelector(
    (state: RootState) => state.productSlice.listOfUsersAndproduct
  );

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector(
    (state: RootState) => state.productSlice.loadingWithUserOrProduct
  );

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      await dispatch(getProductOrUserWithName(searchQuery.trim()));
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    setTrulyLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  useEffect(() => {
    // Clear the previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout
    if (searchQuery.length !== 0) {
      const timeoutId = setTimeout(() => {
        handleSearch();
      }, 1000);

      // Save the timeout ID for later clearing
      setTypingTimeout(timeoutId);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length < 1) {
      dispatch(eraseListOfProducts());
    }
  }, [searchQuery]);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

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

          {user == 0 ? (
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
          <input
            type="text"
            placeholder="What are you looking for?"
            onChange={(e: any) => handleInputChange(e.target.value)}
          />

          <div className="search-results">
            {(!trulyLoading && searchQuery.length > 0) ||
            listOfProducts.length > 0 ? (
              searchQuery.length > 0 && listOfProducts.length > 0 ? (
                listOfProducts.map((product: any, index: number) => (
                  <SearchBarResults {...product} key={index} />
                ))
              ) : (
                <>
                  {searchQuery.length > 0 && (
                    <span className="loading-text">Query not found</span>
                  )}
                </>
              )
            ) : (
              <>
                {searchQuery.length > 0 && (
                  <span className="loading-text">Loading...</span>
                )}
              </>
            )}
          </div>
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
                <div className="avatar-hoverable-comp" onClick={logout}>
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
