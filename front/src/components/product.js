import React from "react";
import Style from '../style/products.module.css'


const Products = ({product})=>{
 return(
    <div className={Style.conteinerProducts}>
        <img className={Style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
        <h3 className={Style.titleProduct}>{product.title}</h3>
        <span className={Style.priceProduct}>${product.price}</span>
        <button>.</button>
    </div>
 )
}

export default Products;