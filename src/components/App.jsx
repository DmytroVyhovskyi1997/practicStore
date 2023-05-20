import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { Categories } from './pages/Categories';
import { Products } from './pages/Products';
import { CardProducts } from './CardProducts/CardProducts';

export const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Categories />} />
        <Route path="/products" element={<Products setProduct={setCartItems} />} />
        <Route path="/add" element={<CardProducts products={cartItems} setProducts={setCartItems} />} />
      </Route>
    </Routes>
  );
};



