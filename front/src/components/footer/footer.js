import React from "react";
import style from './index.module.css'
import { useSelector } from "react-redux";

const Footer = ({to, text})=>{
    const cart = useSelector((state) => state.cart);
    return(

        <div className={style.footerConteiner}>
    <button className={style.footerButton}
    type='submit'
     onClick={to}>
       {cart.cartTotalAmount?
      ( <span  className={style.footerButton}>${cart.cartTotalAmount}</span>):null
    }
        {text}</button>
    </div>
    )
}

export default Footer;