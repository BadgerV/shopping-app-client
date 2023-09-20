import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured_header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="featured__text">Explore</span>
      </div>

      <div className="featured-bottom">
        <div className="featured-left">
          <img src="/assets/game-image.png" alt="Game Image" />

          <div className="featured-left_text-container">
            <span className="featured-left_text-container-big-text">
              PlayStation 5
            </span>
            <span className="featured-left_text-container-small-text">
              Black and white version of PS5 coming out on sale
            </span>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="featured-right">
          <div className="featured-right_top">
            <img src="/assets/women-image.png" alt="Game Image" />

            <div className="featured-right_text-container">
              <span className="featured-right_text-container-big-text">
                PlayStation 5
              </span>
              <span className="featured-right_text-container-small-text">
                Black and white version of PS5 coming out on sale
              </span>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="featured-right_bottom">
            <div className="featured-last-image">
              <img src="/assets/perfume-image.png" alt="Game Image" />
              <div className="featured-right_bottom_text-container">
                <span className="featured-right_bottom_text-container-big-text">
                  PlayStation 5
                </span>
                <span className="featured-right_bottom_text-container-small-text">
                  Black and white version of PS5 coming out on sale
                </span>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="featured-last-image">
              <img src="/assets/speaker-image.png" alt="Game Image" />
              <div className="featured-right_bottom_text-container">
                <span className="featured-right_bottom_text-container-big-text">
                  PlayStation 5
                </span>
                <span className="featured-right_bottom_text-container-small-text">
                  Black and white version of PS5 coming out on sale
                </span>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
