import React from 'react';
import ReactDOM from 'react-dom';
import apagado from './img/apagado.png';
import encendido from './img/encendido.jpg';



function Counter() {

  const[state, setStatus] = React.useState(apagado);
  const[count, setCount] =  React.useState(0);
  
  const encender = () => {
    setStatus(encendido)
    setCount(count + 1)};
  const apagar = () => setStatus(apagado);
  
  return (
    <div>
      <img src={state}/>
      <span>ACCION: </span>
      <button onClick={encender}> ENCENDER </button>
      <button onClick={apagar}>APAGAR</button>
      <br/>
      <span>Cantidad de veces que se ha encendido : {count}</span>
    </div>
  );
  
}

function App(){
  return(
    <div className='App'>
      <Counter />
    </div>
  );
}  

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
