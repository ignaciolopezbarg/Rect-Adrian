import "./App.css";

const movies = ["Lord of the Rings", "Star Wars", "Dune", "Despertares"];

function App() {
  return (
    <div>
      <h1>Renderizado de Listas</h1>
      {movies.map((movie, index) => (
        <p key={index}>
          {index+1} - {movie}
        </p>
      ))}
    </div>
  );
}

export default App;

