import "./newHeader.css";
import { Link } from "react-router-dom";

const NewHeader = () => {
  return (
    <div className="headerNew_container">
      <div className="newHeader_logoContainer">
        <img src="./assets/logo.png" alt="" className="newHeaderLogImg" />
        <span className="newHeader_logoText">Lag Shop</span>
      </div>

      <div className="newHeaderButtonContainer">
        <Link to="/">
          <button
            className="newSignInButton buttonNew"
          >
            <span>Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewHeader;
