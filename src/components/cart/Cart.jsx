import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="cart">
      {console.log(products)}
      <h1 className="cart__h1">Products in your cart</h1>
      {products?.map((item) => (
        <div className="cart__item" key={item.id}>
          <img
            className="cart__item-img"
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt={item.title}
          />
          <div className="cart__item-details">
            <h2 className="cart__h2">{item.title}</h2>
            <p className="cart__p">{item.desc?.substring(0, 100)}</p>
            <div className="cart__price-wrapper">1 x {item.price}</div>
          </div>
          <button>Remove</button>
        </div>
      ))}
      <div className="cart__summary">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className="cart__checkout-btn">PROCEED TO CHECKOUT</button>
      <span className="cart__reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
