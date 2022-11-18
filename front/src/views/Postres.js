import React,{useEffect, useState} from "react";
import { postresApi } from "../features/products.js";
import Products2 from "../components/products2";
import Style from '../style/navBar.module.css'
import Footer from "../components/footer.js";
import Navbar from "../components/Navbar.js";
import Loader from "../components/loader.js";

const Postres = () => {
  const [postresState, setPostre] = useState(null);
  useEffect(()=>{
    postresApi(setPostre);
 },[])

  // const dispatch = useDispatch();
 

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  // onClick={() => handleAddToCart(product)
  return (
     <>
        <Navbar />
   <div>
     <h2 className={Style.categorias}>Postres</h2>
    {postresState!==null?(
      postresState.map(producto => <Products2 product={producto} key={producto.id}/>)
      ):(
        <Loader />
      )}
   </div>
    <Footer/>
    </>
  );
};

export default Postres;
