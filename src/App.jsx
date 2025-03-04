import "./App.css";
import Child from "./components/Child";

import React from 'react'

function App() {
  const textito = 'hola desde el padre'
  return (
    <div>
      <h1>Props-Comunicacion entre componentes</h1>
    <Child msg= {textito} />
    </div>
  )
}

export default App;

