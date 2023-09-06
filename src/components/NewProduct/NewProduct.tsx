import "./newProduct.css";
import image1 from "/assets/image11.jpg";
import image from "/assets/background-image.jpg";
import StarRatingComponent from "react-star-rating-component";
import {useState} from 'react';
import MoreDetails from "../MoreDetails/MoreDetails";

interface NewProductProps {
    name : string,
    price : number,
    description : string,
    rating : number
}

interface TruncateTextProps {
    text: string;
    maxLength: number;
}

const truncateText = ({ text, maxLength }: TruncateTextProps) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength - 3) + ".  .  ." ;
    }
};

const NewProduct = ({ name, price, description, rating } : NewProductProps) => {
  const realName = name.toUpperCase();
  const realRating = +rating;

  const [isModalOpen, setIsModalOpen] = useState(false);

  if(isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  const handleClick = () => {
    setIsModalOpen(true)
    console.log(isModalOpen)
  }
  return (
    <>
    {isModalOpen && <MoreDetails name = {name} price={price} description={description} image = {image} rating = {rating} setIsModalOpen={setIsModalOpen} />}

    <div className="NewProduct" onClick={handleClick}>
      <div className="NewProductImageContainer">
        <img src={image1} alt="" className="NewProductImage" />
      </div>

      <div className="NewPoductPart">
        <div className="NameAndPriceProduct">
          <div className="NewProductNameAndPrice">
            <span className="newPrdocuctName">{realName}</span>
            <span className="newPrdocuctPrice">N{price}</span>
          </div>

          <div className="newProductDescription">{truncateText({text : description, maxLength: 150})}</div>
        </div>
        <div className="starRating">
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={realRating}
            starColor={`white`}
            emptyStarColor={`rgba(0, 0, 0, 0.7)`}
          />
        </div>

        <button className="newProductButton">ADD TO CART</button>
      </div>
    </div>
    </>
  );
};

export default NewProduct;
