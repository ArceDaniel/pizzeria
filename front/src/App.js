import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizzas from "./views/Pizzas";
import Empanadas from "./views/Empanadas";
import Bebidas from "./views/Bebidas";
import Postres from "./views/Postres";
import PurchaseConfirmation from "./views/PurchaseConfirmation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Checkout from "./views/Checkout";
import Logo from "./components/header/header";
import Carrito from "./views/carrito";
import { useState } from "react";



function App() {
  const[carrito, setCarrito] = useState({
    productos:[],
    totalPrice:0
  })

  const addProduct = (product)=>{
    setCarrito({
      productos: [...carrito.productos, product],
      totalPrice: carrito.totalPrice + product.price
    })
    console.log("producto agregado")
    console.log(carrito)
  }




  return (
    <div >
      <Logo/>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home addProduct={addProduct} totalPrice ={carrito.totalPrice} />} />
        <Route path="/pizzas" element={<Pizzas addProduct={addProduct} totalPrice ={carrito.totalPrice} />} />
        <Route path="/empanadas" element={<Empanadas addProduct={addProduct} totalPrice ={carrito.totalPrice} />}  />
        <Route path="/bebidas" element={<Bebidas  addProduct={addProduct} totalPrice ={carrito.totalPrice} />} />
        <Route path="/postres" element={<Postres  addProduct={addProduct} totalPrice ={carrito.totalPrice} />} />
        <Route path="/carrito" element={<Carrito carrito ={carrito}/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route
          path="/confirmacion-de-compra"
          element={<PurchaseConfirmation />}
          />
      </Routes>
     
    </div>
  );
}

export default App;
