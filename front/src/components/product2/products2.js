import React from "react";
import style from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartAppSlice.js";

const Products2 = ({product})=>{
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    return(
       <div className={style.conteinerProducts}>
           <img className={style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
           <h3 className={style.titleProduct}>{product.title}</h3>
           <span className={style.priceProduct}>${product.price}</span>
           <div>
           <button onClick={()=>{
              dispatch(addToCart(product))
              console.log(cart)
        }}>.</button>
           </div>
       </div>
    ) 
   }
   
   export default Products2;