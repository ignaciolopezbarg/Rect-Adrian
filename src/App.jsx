import "./App.css";
// import rioAstronauta from "../assets/rioAstronauta.jpg?url";


const movies = ["Lord of the Rings", "Star Wars", "Dune", "Despertares"];
const animals = [
  {
    id: 1,
    name: "bebe",
     img: "/img/rioAstronauta.jpg",
  },
  {
    id: 2,
    name: "beberio",
     img: "/img/6meses.jpg",
  },
  
];
const Animals = animals.map((animal) => {
  return (
    <div key={animal.id}>
      <h2>{animal.name}</h2>
      <img src={animal.img} alt={animal.name} width={200} height={240} />
    </div>
  )
})
function App() {

  return (
    <div>
      <h1>Renderizado de Listas</h1>
      {movies.map((movie, index) => (
        <p key={index}>
          {index + 1} - {movie}
        </p>
      ))}
      {Animals}
    </div>
  );
}

export default App;
