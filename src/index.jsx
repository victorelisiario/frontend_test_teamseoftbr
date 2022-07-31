import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { IngredientProvider } from './context/useIngredient';
import { CartProvider } from './context/useCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IngredientProvider >
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </IngredientProvider>
);
