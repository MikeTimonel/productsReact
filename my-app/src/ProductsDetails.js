import React, {useEffect, useState} from "react";
import { useParams, useNavigate , Link } from "react-router-dom";
import './ProductsDetails.css';

function ProductsDetails(){
    
    const [productDetail, setProductDetail] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        storedCart.push(id);
        localStorage.setItem("cart", JSON.stringify(storedCart));
        navigate("/cart");
      };
      
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then((data) => setProductDetail(data));
    },);
    return (
        <div>
        {productDetail? (
            <div class="productsDetails">
            <div class = "cuadroImagen">
            <img class="imageProduct" src={productDetail.image} alt={productDetail.title}></img></div>
            <div class="details">
            <p class = "titleProduct">{productDetail.title}</p>
            <p class="priceProduct">{productDetail.price}$</p>
            <p class="descriptProduct">{productDetail.description}</p>
            <button class="buttonAdd" onClick={handleClick}>AGREGAR AL CARRITO</button>
            </div>
            
            </div>
        ):(
            <p>Loading...</p>
        )}
        <Link to={"/"}><button class="back">Volver</button></Link>
      </div>
    );
}

export default ProductsDetails;