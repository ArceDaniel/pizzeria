import React from "react";
import style from './index.module.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    <div>
       <h2 className={style.categorias}>categorias</h2>
      <nav className={style.nav}>
          <button
            className={style.buttonNavPizza}
            onClick={() =>  navigate("/pizzas")}
          >
           <span className={style.title}> pizzas</span>
          </button>
     
     
          <button
           className={style.buttonNavEmpanada}
           onClick={() =>  navigate("/empanadas")}
          >
           <span> Empanadas</span>
          </button>
     
       
          <button
            className={style.buttonNavBebidas}
            onClick={() =>  navigate("/bebidas")}
            >
           <span> Bebidas</span>
          </button>
  
       
          <button
            className={style.buttonNavPostre}
            onClick={() =>  navigate("/postres")}
            >
             <span>Postres</span>
          </button>
      
          </nav>
    </div>
  );
};

export default Navbar;
