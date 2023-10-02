import { useState } from "react";
import {
  CameraIcon,
  ComputerIcon,
  GamePadIcon,
  HeadPhoneIcon,
  PhoneIcon,
  SmartWatchIcon,
} from "../../utils/SensitiveIcons";
import "./categories.css";

const Categories = () => {
  const [scrollNumber, setScrollNumber] = useState(0);

  const scrollRight = () => {
    // console.log(scrollNumber);
    if (scrollNumber == -8) {
      return;
    } else {
      setScrollNumber(scrollNumber - 8);
    }
  };

  const scrollLeft = () => {
    if (scrollNumber == 0) {
      return;
    } else {
      setScrollNumber(scrollNumber + 8);
    }
  };

  const style = {
    transform: `translateX(${scrollNumber}rem)`,
  };

  return (
    <div className="categories">
      <div className="categories-header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="categories-text">Categories</span>
      </div>

      <div className="categories-mini__container">
        <span className="categories-large_text">Browse By Category</span>

        <div className="categories-button">
          <button
            className="categories-left_button"
            style={
              scrollNumber === 0
                ? { backgroundColor: "rgba(250, 234, 214, 0.246)" }
                : {}
            }
            onClick={scrollLeft}
          >
            <img src="/assets/left-arrow.svg" alt="left" />
          </button>
          <button className="categories-right_button" onClick={scrollRight} style={
              scrollNumber === -8
                ? { backgroundColor: "rgba(250, 234, 214, 0.246)" }
                : {}
            }>
            <img src="/assets/right-arrow.svg" alt="right" />
          </button>
        </div>
      </div>

      <div className="categories-middle_container" style={style}>
        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>

        <div className="categories-category">
          <CameraIcon />
          <span>Camera</span>
        </div>

        <div className="categories-category">
          <ComputerIcon />
          <span>Computers</span>
        </div>

        <div className="categories-category">
          <GamePadIcon />
          <span>Games</span>
        </div>

        <div className="categories-category">
          <HeadPhoneIcon />
          <span>Accessories</span>
        </div>
        <div className="categories-category">
          <SmartWatchIcon />
          <span>Watches</span>
        </div>

        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>

        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>

        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>
        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
