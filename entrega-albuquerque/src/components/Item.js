import {useState} from 'react';

export default function Item({product,productoComprado}){
  const {producto, stock} = product;
  const [itemStock,setItemStock]= useState(stock);


    const comprarProducto = () => { 
      setItemStock(itemStock - 1);
      productoComprado();
      }
    

  return (
    <div className='producto'>
      {<>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <h5>En stock: {itemStock > 0 ? itemStock : <span>Agotado</span>}</h5>
        <button disabled={itemStock <= 0} onClick={comprarProducto}>
        {itemStock <= 0 ? 'Sin Stock' : 'Comprar'}
        </button>
        </>
      }
      </div>

    )
}