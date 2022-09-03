import '../index.css';
import data from './data.json';
import Item from './Item';

export default function Listado({productoAgregado}){

  return (
    <div className='container'>

        {data.map((product) => (
          <Item
          key={product.id}
          product={product}
          productoComprado={productoAgregado}
          />
        ))
        }
    </div>
  )
}
