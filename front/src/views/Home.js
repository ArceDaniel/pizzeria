import React, {useEffect, useState} from "react";
import Footer from "../components/footer.js";
import Loader from "../components/loader.js";
import Navbar from "../components/Navbar.js";
import Products from "../components/product";
import { recommended } from "../features/products";
import Style from '../style/navBar.module.css'
import StyleConteiner from '../style/products.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Home =  () => {
  
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const [productos, setPoductos] = useState(null);
   useEffect(()=>{
    recommended(setPoductos);
  },[])
  return (
    <>
       <Navbar />
    <div>
      <h2 className={Style.categorias}>Recomendaciones</h2>
    </div>
    <div className={StyleConteiner.conteiner}>
    {productos!==null?(
      productos.map(producto => <Products product={producto} click={handleAddToCart}  key={producto.id}/>)
      ):(
        <Loader />
      )}
    </div>
    <Footer/>

    </>
  );
};

export default Home;
