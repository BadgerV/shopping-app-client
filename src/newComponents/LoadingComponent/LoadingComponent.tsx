import "./loadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="loading-component">
      <div className="cart-container">
        <img src="/assets/cartAnimation.svg" className="cart"/>
      </div>
    </div>
  );
};

export default LoadingComponent;
