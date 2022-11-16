import React, {useEffect, useState} from "react";
import Footer from "../components/footer.js";
import Products from "../components/product";
import { recommended } from "../features/products";
import Style from '../style/logo.module.css'
import StyleConteiner from '../style/products.module.css'
const Home =  () => {
  const [productos, setPoductos] = useState(null);
   useEffect(()=>{
    recommended(setPoductos);
  },[])
  return (
    <>
    <div>
      <h2 className={Style.categorias}>Recomendaciones</h2>
    </div>
    <div className={StyleConteiner.conteiner}>
    {productos!==null?(
      productos.map(producto => <Products product={producto}/>)
      ):('loding')}
    </div>
 
    <Footer/>

    </>
  );
};

export default Home;
