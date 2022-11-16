import ProductsSchema from "../schemas/productsSchema.js";


const RecoPedidos = async (pedidos)=>{
    pedidos.forEach(async element => {
    if (typeof parseInt(element.charAt(0)) == 'number'){

        const cantidad = element.charAt(0);
        const title = element.substring(2, 0);
        const product = await ProductsSchema.findOne({
            where: {
                title
            }
     
        })
    product.cantPedidos += cantidad; 
    }

})};

export default RecoPedidos;