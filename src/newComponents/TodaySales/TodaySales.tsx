import Product from "../Product/Product";
import "./todaySales.css";

const TodaySales = () => {
    const products = [
        {
            name : "Game Pad",
            price : 405,
            discount : 20,
            rating : 2,
            inStock : 80,
            isLiked : false,
            image : "/assets/image100.png"
        },
        {
            name : "Keyboard",
            price : 4002,
            discount : 20,
            rating : 2,
            inStock : 80,
            isLiked : false,
            image : "/assets/image101.png"
        },
        {
            name : "Monitor",
            price : 4003,
            discount : 20,
            rating : 2,
            inStock : 80,
            isLiked : false,
            image : "/assets/image102.png"
        },
        {
            name : "Chair",
            price : 4004,
            discount : 20,
            rating : 2,
            inStock : 80,
            isLiked : false,
            image : "/assets/image103.png"
        }
    ]
  return (
    <div className="today-sales">
      <div className="today-sales-header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="today-sales__header-text">Today's</span>
      </div>

      <div className="todays-sales__middle-container">
        <span className="sales__middle-text">Flash Sales</span>

        <div className="sales-timing">
          <div className="sales-timing__mini">
            <span className="text">Days</span>
            <span className="number">03</span>
          </div>

          <img src="/assets/semicolon.png" alt="colon" />

          <div className="sales-timing__mini">
            <span className="text">hours</span>
            <span className="number">23</span>
          </div>

          <img src="/assets/semicolon.png" alt="colon" />

          <div className="sales-timing__mini">
            <span className="text">Minutes</span>
            <span className="number">19</span>
          </div>

          <img src="/assets/semicolon.png" alt="colon" />

          <div className="sales-timing__mini">
            <span className="text">Seconds</span>
            <span className="number">56</span>
          </div>
        </div>
      </div>

      <div className="today-sales__products">
        {
            products.map((product, index) => {
                return (
                    <Product key={index} {...product} />
                )
            })
        }
      </div>
    </div>
  );
};

export default TodaySales;
