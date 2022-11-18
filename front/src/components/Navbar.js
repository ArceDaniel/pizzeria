import React, { useState } from "react";
import styleNav from '../style/navButtons.module.css'
import styleNavBar from '../style/navBar.module.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    <div>
       <h2 className={styleNavBar.categorias}>categorias</h2>
      <nav className={styleNavBar.nav}>
          <button
            className={styleNav.buttonNavPizza}
            onClick={() =>  navigate("/pizzas")}
          >
           <span className={styleNav.title}> pizzas</span>
          </button>
     
     
          <button
           className={styleNav.buttonNavEmpanada}
           onClick={() =>  navigate("/empanadas")}
          >
           <span> Empanadas</span>
          </button>
     
       
          <button
            className={styleNav.buttonNavBebidas}
            onClick={() =>  navigate("/bebidas")}
            >
           <span> Bebidas</span>
          </button>
  
       
          <button
            className={styleNav.buttonNavPostre}
            onClick={() =>  navigate("/postres")}
            >
             <span>Postres</span>
          </button>
      
          </nav>
    </div>
  );
};

export default Navbar;
