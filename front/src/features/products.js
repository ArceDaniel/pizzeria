import axios from "axios";

const recommended = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/');
     state(peticion.data);
};

const pizzasApi = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/pizzas');
     state(peticion.data);
};
const empanadasApi = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/empanadas');
    state(peticion.data);
};
const postresApi = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/postres');
    state(peticion.data);
};
const bebidasApi = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/bebidas');
    state(peticion.data);
}

export{
    recommended,
    pizzasApi,
    empanadasApi,
    postresApi,
    bebidasApi
}

