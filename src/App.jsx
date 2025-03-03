
import { useState } from 'react';
import './App.css'

function App() {
  const [myText, setMyText] = useState('Tu nombre');
  const [myValue, setMyValue] = useState('nachito');

  const handleInput = (e) =>{
    console.log(e.target.value);
    setMyValue(e.target.value)
  }
  return (
  <div>
    <h1>Hola a todos</h1>
    <h2>{myText}</h2>
    <input type="text" 
    placeholder={myText} 
    value={myValue} 
    onChange={handleInput}
    />
  </div>
  )
}

export default App;
