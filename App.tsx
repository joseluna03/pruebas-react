import * as React from 'react';
import './style.css';
import Multip from './Multip';

export default function App() {
  const [count, setCount] = React.useState(0)
  const [mensaje, setMensaje] = React.useState('')
  
const multiplicador = React.useCallback(()=>{
 return count*2
  },[count])

  
  function aumento(){
  setCount(count+1)
    //console.log(count)
  
  }
function manejadorInput(e){
    setMensaje(e.target.value)
    //console.log(mensaje)
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <p>contador</p>
      <button onClick={aumento}>aumento</button>
      <input type='text' onChange={manejadorInput}></input>
      <Multip multiplicador={multiplicador}/>
    </div>

  );
}
