const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "pink long sleeved shirt ",
      desc: "lorem ipsum",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black & white mini skirt",
      desc: "lorem ipsum",
      isNew: true,
      oldPrice: 25,
      price: 20,
    },
  ];

  return (
    <div className="cart">
      <h1 className="cart__h1">Products in your cart</h1>
      {data?.map((item) => (
        <div className="cart__item" key={item.id}>
          <img className="cart__item-img" src={item.img} alt={item.title} />
          <div className="cart__item-details">
            <h2 className="cart__h2">{item.title}</h2>
            <p className="cart__p">{item.desc?.substring(0, 100)}</p>
            <div className="cart__price-wrapper">1 x {item.price}</div>
          </div>
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
