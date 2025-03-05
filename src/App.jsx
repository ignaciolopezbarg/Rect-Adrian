import "./App.css";
import Child from "./components/Child";



function App() {
  const textito = 'hola desde el padre';
  const person ={
    sex: 'male', age: 50
  }
  return (
    <div>
      <h1>Props-Comunicacion entre componentes</h1>
    <Child msg= {textito} person = {person} ></Child>
   
    </div>
  )
}

export default App;

