import dotenv from 'dotenv'
dotenv.config();

const sendMenssage = (obj)=>{



    return `https://api.whatsapp.com/send?phone=${process.env.PHONE}&text=mi%20pedido%20es:%20http://localhost:3000/view/${obj.number}`
}
export default sendMenssage