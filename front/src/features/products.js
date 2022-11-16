import axios from "axios";

const recommended = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/');
     state(peticion.data);
};

const pizzas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/pizzas');
     state(peticion.data);
};
const empanadas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/empanadas');
    state(peticion.data);
};
const postres = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/postres');
    state(peticion.data);
};
const bebidas = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/bebidas');
    state(peticion.data);
}

export{
    recommended,
    pizzas,
    empanadas,
    postres,
    bebidas
}

