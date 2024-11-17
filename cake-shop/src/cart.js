import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeItem, updateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Size: {item.size}</p>
              <p>Price: ${item.price}</p>
              <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="total">
        <h3>Total: ${total}</h3>
      </div>

      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
