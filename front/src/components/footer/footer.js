import React from "react";
import style from './index.module.css'

const Footer = ({to, text, totalPrice})=>{
    return(

        <div className={style.footerConteiner}>
    <button className={style.footerButton}
     onClick={to}>
       { totalPrice?
      ( <span  className={style.footerButton}>${totalPrice}</span>):null
    }
        {text}</button>
    </div>
    )
}

export default Footer;