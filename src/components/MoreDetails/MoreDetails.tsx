import "./moreDetails.css";
import StarRatingComponent from "react-star-rating-component";

interface MoredetailsProps {
  name: string;
  description: string;
  rating: number;
  image: any;
  price: number;
  setIsModalOpen: any;
}

const MoreDetails = ({
  name,
  description,
  rating,
  image,
  setIsModalOpen,
  price,
}: MoredetailsProps) => {
  const realRating = +rating;

  return (
    <div className="more-details">
      <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>

      <div className="more-details-container">
        <div className="more-details-container-left">
          <img src={image} alt="" className="more-details-image" />
        </div>

        <div className="more-details-container-right">
          <span className="more-details-name">{name}</span>
          <span className="more-details-description">{description}</span>
          <span className="more-details-price">N{price}</span>
          <div className="starRating">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={realRating}
              starColor={`black`}
              emptyStarColor={`rgba(0, 0, 0, 0.7)`}
            />
          </div>
          <div className="more-details-buttons">
            <button className="more-details-button">Go to Page</button>
            <button className="more-details-button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
