import React,{useEffect, useState} from "react";
import { pizzasApi } from "../features/products.js";
import Products2 from "../components/product2/products2";
import style from './index.module.css';
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navBar/Navbar.js";
import Loader from "../components/loader/loader.js";
import { useNavigate } from "react-router-dom";


const Pizzas = ({addProduct, totalPrice}) => {
  const navigate = useNavigate();
  const [pizzasState, setPizzas] = useState(null);
  useEffect(()=>{
   pizzasApi(setPizzas);
 },[])
  return (
    <>
       <Navbar />
   <div>
     <h2 className={style.categorias}>Pizzas</h2>
    {pizzasState!==null?(
      pizzasState.map(producto => <Products2 product={producto} addProduct={addProduct}  key={producto.id}/>)
      ):(
        <Loader />
      )}
   </div>
   <Footer totalPrice={totalPrice} to = {() =>  navigate("/carrito")} text={'Ver mi pedido'} />
    </>
  );
};

export default Pizzas;
