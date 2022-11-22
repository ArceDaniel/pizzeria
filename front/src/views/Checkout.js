import React, { useEffect, useState } from "react";
import style from './index.module.css'
import { useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [orderData, setOrder] = useState({
   order:cart.cartItems,
   price:cart.cartTotalAmount,
   address:"",
   phone: "",
   name:"",
   comment:"",
   clientIp:""
});
const [error, setError] = useState({
  address:"",
  phone: "",
  name:"",
  comment:"",
});


useEffect(()=>{
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data =>  setOrder({
        ...orderData,
        clientIp:data.ip}))
        .catch(err => console.log('me rompi'))
},[orderData])

const handleInputChange = (e) => {
  
  const { name, value } = e.target;
  setOrder({
      ...orderData,
      [name]: value
  })
}
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
   <div>
    <h2 className={style.categorias}>Checkout</h2>
    <ul>
    {
      cart.cartItems.map(product =>(
        <li className={style.categorias} key={product.id}>{product.cartQuantity}-{product.title}:  ${product.cartQuantity * product.price}</li>
      ))
    }
    </ul>
    <form onSubmit={handleSubmit} >
        <input type='number' className={style.inputs} placeholder="Teléfono" name="phone" value={orderData.phone} onChange={handleInputChange} />
        <input className={style.inputs} placeholder="Nombre" name="name" value={orderData.name} onChange={handleInputChange} />
        <input className={style.inputs} placeholder="Direccion" name="address" value={orderData.address} onChange={handleInputChange} />
        <textarea className={style.textArea} placeholder="Mensaje Opcional" name="comment" value={orderData.comment} onChange={handleInputChange} />
  
   {
     cart.cartTotalAmount?(
       <Footer to={() =>  console.log()} text='Confirmar pedido' />
       ):(
         <Footer  to = {() =>  navigate("/")} text={'Agregar Productos'} />
         )
        }
        </form>
      </div>
    </>
  );
};

export default Checkout;
