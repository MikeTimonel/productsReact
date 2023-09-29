import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './ProductsData.css';

function ProductsData(){
    const [productsData, setProductsData] = useState(null);
    
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProductsData(data));
    }, []);
    
    return (
      <div>
      {productsData ? (
        <div class="products">
          {productsData.map((product)=>(
            <div class= "individualProduct">
            <Link to={`products/${product.id}`}>
            <div class = "cuadroFondo">
            <img class="imageProduct" src={product.image} alt={product.title}></img></div>
            </Link>
            <p class = "titleProduct">{product.title}</p>
            <p class="priceProduct">{product.price}$</p>
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
