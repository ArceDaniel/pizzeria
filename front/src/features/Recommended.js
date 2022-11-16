import axios from "axios";

const recommended = async (state)=>{
    const peticion = await axios.get('http://localhost:5000/products/');
     console.log(peticion)
};

export{
    recommended
}

