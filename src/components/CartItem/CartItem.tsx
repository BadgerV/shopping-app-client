import "./cartItem.css";

const demoData = [
  {
    name: "Hair Cream",
    price: 500,
    amount: 3,
    id: 1,
  },
  {
    name: "Hair Cream",
    price: 500,
    amount: 3,
    id: 2,
  },
  {
    name: "Hair Cream",
    price: 500,
    amount: 3,
    id: 3,
  },
  {
    name: "Hair Cream",
    price: 500,
    amount: 3,
    id: 4,
  },
];

interface dataType {
  name : string,
  price : number,
  amount : number,
  id : number
}

const CartItem = () => {
  return (
    <div>
      {demoData.map((data: dataType) => (
        <div className="cart-item" key={data.id}>
          <div className="cart-item-top">
            <div className="cart-item-left">
              <img
                src="/assets/image12.jpg"
                alt="cart image"
                className="cart-item-left-image"
              />
            </div>
            <div className="cart-item-middle">
              <div className="cart-item-middle-name">{data.name}</div>
              <div className="cart-item-middle-price">{data.price}</div>
            </div>

            <button className="cart-item-right">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
