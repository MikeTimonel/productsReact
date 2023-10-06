import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from './Context';
import './ProductsData.css';

function ProductsData() {
  const { state, dispatch } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (state.category) {
      fetch(`https://fakestoreapi.com/products/category/${state.category}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data);
          dispatch({ type: 'SET_PRODUCTS', payload: data });
        });
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data);
          dispatch({ type: 'SET_PRODUCTS', payload: data });
        });
    }
  }, [state.category, dispatch]);

  return (
    
    <div>
      {filteredProducts.length > 0 ? (
        <div className="products">
          {filteredProducts.map((product) => (
            <div className="individualProduct" key={product.id}>
              <Link to={`products/${product.id}`}>
                <div className="cuadroFondo">
                  <img className="imageProduct" src={product.image} alt={product.title} />
                </div>
              </Link>
              <p className="titleProduct">{product.title}</p>
              <p className="priceProduct">{product.price}$</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductsData;
