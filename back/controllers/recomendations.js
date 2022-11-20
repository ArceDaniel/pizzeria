import ProductsSchema from "../schemas/productsSchema.js";


const RecoPedidos = async (pedidos)=>{

    pedidos.forEach(async element => {
    const pedidoData = element.split('-');
    if (typeof parseInt(element.charAt(0)) == 'number'){

        const cantidad = pedidoData[0];
        const title = pedidoData[1];
        const product = await ProductsSchema.findOne({
            where: {
                title
            }
     
        })
    product.cantPedidos += cantidad; 
    }

})};

export default RecoPedidos;