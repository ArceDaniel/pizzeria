import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import Products3 from "../components/product3/products3";
import style from './index.module.css'


export default function Carrito({carrito}){
  const navigate = useNavigate();
return(
    <>
    <div>
      <h2 className={style.categorias}>Carrito</h2>
     {
       carrito.productos.map(producto => <Products3 product={producto} key={producto.id}/>)
      }
      <Footer to = {() =>  navigate("/checkout")} text={'Confirmar Pedido'} />
    </div>
    </>
)

}