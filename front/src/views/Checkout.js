import React, { useEffect, useState } from "react";
import style from './index.module.css'
import { useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { helpHttp } from "../features/httpServer";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartAppSlice.js";

const api = helpHttp();

const Checkout = () => {

  const dispatch = useDispatch();
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
});



useEffect(()=>{
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data =>  setOrder({
        ...orderData,
        clientIp:data.ip}))
        .catch(err => console.log('me rompi'))
},[])

const handleInputChange = (e) => {
  
  const { name, value } = e.target;
  setOrder({
      ...orderData,
      [name]: value
  })
  setError(
    validate(({
        ...orderData,
        [name]: value
    }))
)
}
const validate = (data) =>{
  const error = {}
  const regexPhone = /^[0-9]*^[()-]*$/ 
  if(regexPhone.test(data.phone)){
    error.phone = 'numero invalido'
  }
  if(!data.address){
    error.address = 'direcion invalido'
  }
  return error;
}


  const handleSubmit = (e) =>{
    e.preventDefault();
    const options = {
      body: orderData,
      headers: { "content-type": "application/json" },
    };
    const validate = Object.keys(error);

    if(validate.length)
      return window.alert('Complete los campos obligatorios');

    api.post("checkout", options).then(res => {
      console.log(res)
      if (!res.err){
      setOrder({
        order:'',
        price:'',
        address:"",
        phone: "",
        name:"",
        comment:"",
        clientIp:""
      })
      dispatch(clearCart())
      window.location.href = res.url;
    }
    Window.headers= {authorization:res.jwt};
    });
    
  }

  return (
    <>
   <div>
    <h2 className={style.categorias}>Checkout</h2>
    <ul className={style.lista}>
    {
      cart.cartItems.map(product =>(
        <li className={style.categorias} key={product.id}>{product.cartQuantity}-{product.title}:  ${product.cartQuantity * product.price}</li>
      ))
    }
    </ul>
    
    <form onSubmit={handleSubmit} >
        <input type='number' className={style.inputs} style={error.phone?({border:'2px solid red'}): null} placeholder="Teléfono (obligatorio)*" name="phone" value={orderData.phone} onChange={handleInputChange} />
        <input className={style.inputs} placeholder="Nombre" name="name" value={orderData.name} onChange={handleInputChange} />
        <input className={style.inputs} style={error.address?({border:'2px solid red'}): null} placeholder="Direccion (obligatorio)*" name="address" value={orderData.address} onChange={handleInputChange} />
        <textarea className={style.textArea} placeholder="Mensaje Opcional" name="comment" value={orderData.comment} onChange={handleInputChange} />
  
   {
     cart.cartTotalAmount?(
       <Footer to={() =>  console.log('flama')} text='Confirmar pedido' />
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
