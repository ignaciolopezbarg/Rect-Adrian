import { useState } from "react";
import "./App.css";


function App() {
  const [number, setNumber] = useState(0);
  const addOne = () => {
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <div>
      <h1>Hola React</h1>
      <h2 onClick={addOne}>Number: {number}</h2>
    </div>
  );
}

export default App;
