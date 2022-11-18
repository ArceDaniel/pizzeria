import React,{useEffect, useState} from "react";
import { empanadasApi } from "../features/products.js";
import Products2 from "../components/products2";
import Style from '../style/navBar.module.css'
import Footer from "../components/footer.js";
import Navbar from "../components/Navbar.js";
import Loader from "../components/loader.js";

const Empanadas = () => {
  const [empanadasState, setEmpanadas] = useState(null);
  useEffect(()=>{
   empanadasApi(setEmpanadas);
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
     <h2 className={Style.categorias}>Empanadas</h2>
    {empanadasState!==null?(
      empanadasState.map(producto => <Products2 product={producto}  key={producto.id}/>)
      ):(
        <Loader />
      )}
   </div>
    <Footer/>
    </>
  );
};

export default Empanadas;
