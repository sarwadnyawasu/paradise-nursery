import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handleQuantityChange = (name, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ name, quantity: parseInt(quantity) }));
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping at Paradise Nursery 🌿');
  };

  return (
    <div className="cart-page">
      <h1 style={{ color: '#4CAF50', marginBottom: '10px' }}>🛒 Your Cart</h1>

      <button
        onClick={onContinueShopping}
        style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}
      >
        ← Continue Shopping
      </button>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go add some plants! 🌱</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>${item.price} each</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => handleQuantityChange(item.name, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.name, item.quantity + 1)}>+</button>
              </div>
              <button
                onClick={() => handleRemove(item.name)}
                style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '15px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            Total: ${totalCost}
          </div>

          <button
            onClick={handleCheckout}
            style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', cursor: 'pointer', fontSize: '1.1rem', marginTop: '20px', display: 'block', marginLeft: 'auto' }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
