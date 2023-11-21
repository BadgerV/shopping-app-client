import "./postProductSuccessPage.css";
import { Link } from "react-router-dom";

const PostProductSucessPage = () => {
  return (
    <div className="post-product-success-page">
      <span className="post-product-success-page_span1">SUCCESS!!!</span>
      <span className="post-product-success-page_span2">
        You have successfully posted a new product
      </span>

      <Link to="/my-vendor-page" className="post-product-success-page-link">
        <img src="/assets/Arrow_left.svg" alt="arrowF" />
        Go Back
      </Link>
    </div>
  );
};

export default PostProductSucessPage;
