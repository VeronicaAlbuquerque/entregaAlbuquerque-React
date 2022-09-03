import { useState } from 'react';
import './index.css';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';


function App() {

  const [productosComprados, setProductosComprados]= useState(0);

  const productosCargados = () => setProductosComprados(productosComprados + 1)
  
  return (
    <div className="App">
      <Cabecera stock={productosComprados}/>
      <Listado productoAgregado={productosCargados}/>
    </div>
  );
}

export default App;