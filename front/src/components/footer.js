import React from "react";
import { useNavigate } from "react-router-dom";
import Style from '../style/footer.module.css'

const Footer = ()=>{
    const navigate = useNavigate();
    return(

        <div className={Style.footerConteiner}>
    <button className={Style.footerButton}
     onClick={() =>  navigate("/carrito")}>
        <span></span>
        ver mi pedido</button>
    </div>
    )
}

export default Footer;