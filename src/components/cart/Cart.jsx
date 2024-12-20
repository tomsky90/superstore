import { useSelector, useDispatch } from "react-redux";
import { resetCart, removeItem } from "../../redux/cartSlice";
import { useState } from "react";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";

import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [error, setError] = useState(null);

  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.qty * item.price));

    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51OdNxuINCGdR9J4EQ3OCAaH1ZtdTQyeukW6wqna4J4qyXOudFT1qhVTiOVET9SrcBmxlMvOvSiwjHtz8OF7ERxAQ00eaNPSM1r"
  );
  const handlePayment = async () => {
    if (products.length === 0) {
      setError("Your cart is empty");
    } else {
      try {
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders.php", {
          products,
        });
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="cart">
      <h1 className="cart__h1">Products in your cart</h1>
      <div className="cart__items-wrapper">
        {products?.map((item) => (
          <div className="cart__item" key={item.id}>
            <img
              className="cart__item-img"
              src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
              alt={item.title}
            />
            <div className="cart__item-details">
              <h2 className="cart__h2">{item.title}</h2>
              <p className="cart__p">{item.description?.substring(0, 100)}</p>
              <div className="cart__price-wrapper">
                {item.qty} x {item.price}
              </div>
              <button
                className="cart__remove-btn"
                onClick={() => {
                  dispatch(removeItem(item.id));
                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__summary">
        <span>SUBTOTAL</span>
        <span>£{total()}</span>
      </div>
      {error && <span className="cart__error">{error}</span>}
      <button onClick={() => handlePayment()} className="cart__checkout-btn">
        PROCEED TO CHECKOUT
      </button>
      <button
        className="cart__reset"
        onClick={() => {
          dispatch(resetCart());
        }}
      >
        Reset Cart
      </button>
      <FeaturedProducts location={"Trending"} />
    </div>
  );
};

export default Cart;
