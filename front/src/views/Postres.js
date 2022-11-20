import React,{useEffect, useState} from "react";
import { postresApi } from "../features/products.js";
import Products2 from "../components/product2/products2";
import style from './index.module.css';
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navBar/Navbar.js";
import Loader from "../components/loader/loader.js";
import { useNavigate } from "react-router-dom";

const Postres = ({addProduct, totalPrice}) => {
  const navigate = useNavigate();
  const [postresState, setPostre] = useState(null);
  useEffect(()=>{
    postresApi(setPostre);
 },[])

  return (
     <>
        <Navbar />
   <div>
     <h2 className={style.categorias}>Postres</h2>
    {postresState!==null?(
      postresState.map(producto => <Products2 addProduct={addProduct} product={producto} key={producto.id}/>)
      ):(
        <Loader />
      )}
   </div>
   <Footer totalPrice={totalPrice} to = {() =>  navigate("/carrito")} text={'Ver mi pedido'} />
    </>
  );
};

export default Postres;
