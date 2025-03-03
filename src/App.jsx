import "./App.css";

function App() {
  const condition = true;

return (
  <div>
    <h1>renderizado condicional</h1>
    {condition ? (
      <h2>La condicion se cumple</h2>
    ) : (
      <h2>La condicion no se cumple</h2>
    )}
  </div>
);
}

export default App;
