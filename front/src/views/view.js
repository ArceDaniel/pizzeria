import React from 'react';
import { useParams } from 'react-router-dom';
import { helpHttp } from '../features/httpServer';
import style from './index.module.css';

const api = helpHttp();

const View = () => {
  const { id } = useParams();
  const options = {

  };

  api.get(`checkout/order/${id}`, options).then(res => console.log(res))

  return (
    <div>
        <h2 className={style.categorias}>Su compra se ha efectuado exitosamente!</h2>
    </div>
  )
}

export default View;