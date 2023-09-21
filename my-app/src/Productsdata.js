import React, {useEffect, useState} from "react";
import './ProductsData.css';

function ProductsData(){
    const [productsData, setProductsData] = useState(null);
    const [numberfull, setnumbersProducts] = useState(10)
    const [buttonstate, setbuttonstate] = useState(true)
    const handleClick = () => {
      setnumbersProducts(20);
      setbuttonstate(false);
    }

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProductsData(data));
    }, []);
    
    return (
        <div>
      {productsData ? (
        <div class="products">
          {productsData.slice(0,numberfull).map((product)=>(
            <div class= "individualProduct">
            <div class = "cuadroFondo">
            <img class="imageProduct" src={product.image} alt={product.title}></img></div>
            <p class = "titleProduct">{product.title}</p>
            <p class="priceProduct">{product.price}$</p>
            </div>
            
      ))}
      
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
      {buttonstate && (
      <div>
        <button onClick={handleClick}>Ver más</button></div>)}
    </div>
    );

}

export default ProductsData;
