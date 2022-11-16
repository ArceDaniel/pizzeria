import React from "react";
import Style from '../style/footer.module.css'
const Footer = ()=>{
    return(

        <div className={Style.footerConteiner}>
    <button className={Style.footerButton}>
        <span></span>
        ver mi pedido</button>
    </div>
    )
}

export default Footer;