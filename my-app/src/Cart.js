import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    const [cart, setCart] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
  
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);
  
    useEffect(() => {
      Promise.all(
        cart.map((productId) =>
          fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
        )
      ).then((products) => setCartProducts(products));
    }, [cart]);
  
    return (
      <div>
        {cartProducts.length > 0 ? (
          <div class="productsCart">
            {cartProducts.map((product) => (
                <div class="productAdded">
                <div class = "cuadroCart">
                <img class="imageCart" src={product.image} alt={product.title}></img></div>
                <p class="titleCart">{product.title}</p>
                <p class="priceCart">{product.price}$</p>
              </div>
            ))}
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
        <Link to={"/"}><button class="back">Volver</button></Link>
      </div>
    );
  }
  
  export default Cart;