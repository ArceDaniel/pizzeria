import React from "react";
import style from './index.module.css'

const Products3 = ({product, addProduct})=>{
  return(
    <div className={style.conteinerProducts}>
       <img className={style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
        <div className={style.data}>
          <div className={style.top}>
          <h3 className={style.titleProduct}>{product.title}</h3>
          <button className={style.delete}></button>
          </div>
            <div className={style.count}>
              <span className={style.priceProduct}>${product.price}</span>
              <button className={style.menos}></button>
              <span className={style.span}>1</span>
              <button className={style.mas}></button>
           </div>
        </div>
    </div>
    ) 
   }
   
   export default Products3;