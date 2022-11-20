import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer.js";
import Loader from "../components/loader/loader.js";
import Navbar from "../components/navBar/Navbar.js";
import Products from "../components/product1/product";
import { recommended } from "../features/products";
import style from './index.module.css'


const Home = ({addProduct, totalPrice}) => {
  const navigate = useNavigate();
  const [productos, setPoductos] = useState(null);
   useEffect(()=>{
    recommended(setPoductos);
  },[])
  return (
    <>
       <Navbar />
    <div>
      <h2 className={style.categorias}>Recomendaciones</h2>
    </div>
    <div className={style.conteiner}>
    {productos!==null?(
      productos.map(producto => <Products product={producto} addProduct={addProduct} key={producto.id}/>)
      ):(
        <Loader />
      )}
    </div>
    <Footer totalPrice={totalPrice} to = {() =>  navigate("/carrito")} text={'Ver mi pedido'} />

    </>
  );
};

export default Home;
