import { PhoneIcon } from "../../utils/SensitiveIcons";
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="categories-text">Categories</span>
      </div>

      <div className="categories-mini__container">
        <span className="categories-large_text">Browse By Category</span>

        <div className="categories-button">
          <button className="categories-left_button">
            <img src="/assets/left-arrow.svg" alt="left" />
          </button>
          <button className="categories-right_button">
            <img src="/assets/right-arrow.svg" alt="right" />
          </button>
        </div>
      </div>

      <div className="categories-middle_container">
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

        <div className="categories-category">
          <PhoneIcon />
          <span>Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
