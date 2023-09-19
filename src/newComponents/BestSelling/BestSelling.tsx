import Product from "../Product/Product";
import "./bestSelling.css";

const BestSelling = () => {
  const products = [
    {
      name: "Game Pad",
      price: 405,
      discount: 20,
      rating: 4,
      inStock: 80,
      isLiked: false,
      image: "/assets/image100.png",
    },
    {
      name: "Keyboard",
      price: 4002,
      discount: 20,
      rating: 3,
      inStock: 80,
      isLiked: false,
      image: "/assets/image101.png",
    },
    {
      name: "Monitor",
      price: 4003,
      discount: 20,
      rating: 1,
      inStock: 80,
      isLiked: false,
      image: "/assets/image102.png",
    },
    {
      name: "Chair",
      price: 4004,
      discount: 20,
      rating: 4,
      inStock: 80,
      isLiked: false,
      image: "/assets/image103.png",
    },
    {
      name: "Chair",
      price: 8000,
      discount: 20,
      rating: 4,
      inStock: 80,
      isLiked: true,
      image: "/assets/image103.png",
    },
  ];
  return (
    <div className="best-selling">
      <div className="Best-selling_header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="Best-selling_text">Best-selling</span>
      </div>

      <div className="best-selling_mini__container">
        <span className="best-selling_large_text">Best Selling Products </span>

        <button>View More</button>
      </div>

      <div className="best-selling_products_cont">
        {products.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </div>
    </div>
  );
};

export default BestSelling;
