import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span>LagShop</span>
      </div>
      <div className="header-center">
        <ul className="header-center__links">
          <li className="header-center_link">Home</li>
          <li className="header-center_link">Categories</li>
          <li className="header-center_link">Vendors</li>
          <li className="header-center_link">Sign up</li>
          <li className="header-center_link">Sign in</li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-right__searchbar">
          <input type="text" placeholder="What are you looking for?" />
          <img src="/assets/searchicon.png" alt="icon" />
        </div>

        <div className="header-right__heart-icon">
          <img src="/assets/hearticon.svg" alt="icon" />
        </div>

        <div className="header-right__cart-icon">
          <img src="/assets/carticon.svg" alt="icon" />
        </div>

        <div className="header-left__avatar">
          <img src="/assets/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;