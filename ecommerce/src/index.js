import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './components/Other/ScrollToTop';
import { FilterProvider } from './context';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false}/>
        <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);