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
        </div>
        <div className="featured-right">
          <div className="featured-right_top">
            <img src="/assets/women-image.png" alt="Game Image" />
          </div>
          <div className="featured-right_bottom">
            <div className="featured-last-image">
              <img src="/assets/perfume-image.png" alt="Game Image" />
            </div>
            <div className="featured-last-image">
              <img src="/assets/speaker-image.png" alt="Game Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
