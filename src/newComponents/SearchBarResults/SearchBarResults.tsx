import "./searchBarResults.css";

interface SeacrhBarProps {
  firstName: string;
  lastName: string;
  name: string;
  price: number;
  originalProductPrice: number;
}
const SearchBarResults = ({
  firstName,
  lastName,
  name,
  originalProductPrice,
}: SeacrhBarProps) => {
  return (
    <div className="search-bar-result">
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
        </span>
      </div>
    </div>
  );
};

export default SearchBarResults;
