import "./postProductSuccessPage.css";
import { Link } from "react-router-dom";

const PostProductSucessPage = () => {
  return (
    <div className="post-product-success-page">
      <span className="post-product-success-page_span1">SUCCESS!!!</span>
      <span className="post-product-success-page_span2">
        You have successfully posted a new product
      </span>
      <div className="post-product-success-div">
        <Link to="/my-vendor-page" className="post-product-success-page-link">
          <img src="/assets/Arrow_left_light.svg" alt="arrowF" />
          Go Back
        </Link>
        <Link to="/my-vendor-page" className="post-product-success-page-link">
          Go to product page
        </Link>
      </div>
    </div>
  );
};

export default PostProductSucessPage;
