import React from "react";
import Style from '../style/products.module.css'
const Products2 = ({product, click})=>{
    return(
       <div className={Style.conteinerProducts2}>
           <img className={Style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
           <h3 className={Style.titleProduct2}>{product.title}</h3>
           <span className={Style.priceProduct2}>${product.price}</span>
           <div>
           <button></button>
           </div>
       </div>
    )
   }
   
   export default Products2;