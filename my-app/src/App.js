//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Userdata from './Userdata';
import ProductsData from './Productsdata';
import Cart from './Cart';
import { Routes, Route } from "react-router-dom";
import ProductsDetails from './ProductsDetails';


export default function App() {
  return (
    <div className="App">
    <Userdata />
      <Routes>
        <Route path="/" element={<ProductsData />} />
        <Route exact path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}