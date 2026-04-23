import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <div>
      {page === 'landing' && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button
            className="get-started-btn"
            onClick={() => setPage('products')}
          >
            Get Started
          </button>
        </div>
      )}

      {page === 'products' && (
        <ProductList onGoToCart={() => setPage('cart')} />
      )}

      {page === 'cart' && (
        <CartItem onContinueShopping={() => setPage('products')} />
      )}
    </div>
  );
}

export default App;
