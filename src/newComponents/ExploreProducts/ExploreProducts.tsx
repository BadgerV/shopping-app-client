import Product from "../Product/Product";
import "./exploreProducts.css";

const ExploreProducts = () => {
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
    {
      name: "Chair",
      price: 8000,
      discount: 20,
      rating: 4,
      inStock: 80,
      isLiked: true,
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
    {
      name: "Chair",
      price: 8000,
      discount: 20,
      rating: 4,
      inStock: 80,
      isLiked: true,
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
    {
      name: "Monitor",
      price: 4003,
      discount: 20,
      rating: 1,
      inStock: 80,
      isLiked: false,
      image: "/assets/image102.png",
    },
  ];
  return (
    <div className="exploreProduct">
      <div className="explore-products_header">
        <img src="/assets/rect.png" alt="rectangle" />
        <span className="explore-products__text">Explore</span>
      </div>

      <div className="explore-products_mini__container">
        <span className="explore-products_large_text">Explore Products </span>
      </div>

      <div className="explore-products_product__container">
        {products.map((product, index) => {
          return <Product key={index} {...product} />;
        })}
      </div>

      <button className="explore-button_view-more">View All Products</button>
    </div>
  );
};

export default ExploreProducts;
