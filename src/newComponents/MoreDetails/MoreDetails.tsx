import "./moreDetails.css";
import StarRatingComponent from "react-star-rating-component";
import { formatNumberToCurrency, navigateTo } from "../../utils/utilsFunctions";
import { formatRelativeTime } from "../../utils/utilsFunctions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface MoredetailsProps {
  setIsModalOpen: any;
  description: string;
  inStock: boolean;
  name: string;
  price: number;
  owner: number;
  productImage: any;
  stock: number;
  productDiscount?: number;
  shippingCost: number;
  createdAt: any;
  _id: number;
  rating: number; // Add the rating property to the interface
  productCategories: [string];
  originalProductPrice : number
}

const MoreDetails = ({
  setIsModalOpen,
  inStock,
  name,
  price,
  productImage,
  stock,
  productDiscount,
  rating, // Add the rating property to the component's props
  description,
  owner,
  shippingCost,
  createdAt,
  productCategories,
  _id,
  // originalProductPrice,
}: MoredetailsProps) => {
  const realRating = +rating;

  let thisOwner: any;
  const ownersOfProduct = useSelector(
    (state: RootState) => state.userSlice.ownersOfProduct
  );
  const isLoadingProductOwner = useSelector(
    (state: RootState) => state.userSlice.isLoadingOwners
  );

  ownersOfProduct?.map((vendor: any) => {
    if (owner === vendor._id) {
      thisOwner = vendor;
    }
  });
  const navigate = useNavigate();

  return (
    <div className="more-details">
      <button className="close-button" onClick={() => setIsModalOpen(false)}>
        <img src="/assets/close-icon.svg" alt="" />
      </button>

      <div className="more-details-container">
        <div className="more-details-container-left">
          <div className="more-details-container-left__top">
            <img
              src={`data:image/png;base64,${productImage}`}
              alt=""
              className="more-details-image"
            />
          </div>

          <div className="more-details_container_left_bottom">
            <div className="more-details__pair-info">
              <span className="more-details_info_big-text">Discount</span>
              <span className="more-details_info_small-text">
                {productDiscount}%
              </span>
            </div>

            <div className="more-details__pair-info">
              <span className="more-details_info_big-text">Shipping Cost</span>
              <span className="more-details_info_small-text">
                N{formatNumberToCurrency(shippingCost)}
              </span>
            </div>

            <div className="more-details__pair-info">
              <span className="more-details_info_big-text">Posted</span>
              <span className="more-details_info_small-text">
                {formatRelativeTime(createdAt)}
              </span>
            </div>

            {inStock && (
              <div className="more-details__pair-info">
                <span className="more-details_info_big-text">Stock</span>
                <span className="more-details_info_small-text">{stock}</span>
              </div>
            )}
          </div>
        </div>

        <div className="more-details-container-right">
          <span className="more-details-name">{name}</span>
          <span className="more-details-description">{description}</span>
          <span className="more-details-price">
            &#x20A6;{formatNumberToCurrency(price)}
          </span>
          <div className="starRating">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={realRating}
              starColor={`#db4444`}
              emptyStarColor={`white`}
            />
          </div>

          <div className="more-details_categories-container">
            <span>Categories</span>
            <div>
              {productCategories.map((category, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => navigateTo(`category/${category}`, navigate)}
                  >
                    {category}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="more-details__owner-info">
            <span className="more-details__vendor-text">About Vendor</span>
            <div className="more-details__vendor-cont">
              {isLoadingProductOwner ? (
                <img src="/assets/spinner.svg" alt="" />
              ) : (
                <div className="more-details__vendor-inner-cont">
                  <div className="more-details__vendor-iner-cont-upper">
                    <span className="more-details_vendor-name">
                      {thisOwner.firstName} {thisOwner.lastName}
                    </span>
                    <img
                      src={`data:image/png;base64,${thisOwner.avatar}`}
                      alt=""
                    />
                  </div>
                  <div className="more-details__vendor-iner-cont-lower">
                    <Link
                      to=""
                      className="more-details__vendor-iner-cont-lower__link"
                    >
                      Go to {thisOwner.firstName}'s page
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="more-details-buttons">
            <button
              className="more-details-button"
              onClick={() => navigateTo(`product/${_id}`, navigate)}
            >
              Go to page
            </button>
            <button className="more-details-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
