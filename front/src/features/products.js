import axios from "axios";

const recommended = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/');
     state(peticion.data);
     console.log(peticion.data);
};
const pizzas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/pizzas');
     console.log(peticion)
};
const empanadas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/empanadas');
     console.log(peticion)
};
const postres = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/postres');
     console.log(peticion)
};
const bebidas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/bebidas');
     console.log(peticion)
};

export{
    recommended,
    pizzas,
    empanadas,
    postres,
    bebidas
}

