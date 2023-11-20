import "./searchBarResults.css";
import { navigateTo } from "../../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";

interface SeacrhBarProps {
  firstName: string;
  lastName: string;
  name: string;
  price: number;
  originalProductPrice: number;
  _id: string;
}
const SearchBarResults = ({
  firstName,
  lastName,
  name,
  originalProductPrice,
  _id,
}: SeacrhBarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name) {
      navigateTo(`product/${_id}`, navigate);
    } else {
        //DO SOMETHING
    }
  };
  return (
    <div className="search-bar-result" onClick={handleClick}>
      <div className="search-bar-result_left">
        {firstName ? (
          <span>
            {firstName} {lastName}
          </span>
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className="search-bar-result_right">
        <span>
          {originalProductPrice && <span>{originalProductPrice}</span>}
          {firstName && <span className="vendor-text">Vendor</span>}
        </span>
      </div>
    </div>
  );
};

export default SearchBarResults;
