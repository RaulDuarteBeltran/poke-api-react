import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import "./App.css";
import PokeCarta from "./PokeCarta";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  //   fetch("https://pokeapi.co/api/v2/pokemon/35")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const clefairy = Pokemon.FromJson(data);
  //       console.log(clefairy);
  //       setPokemons([clefairy]);
  //     });

  if (pokemons.length === 0) return <h1>No hay pokemons :(</h1>;
  return <PokeCarta pokemon={pokemons[0]} />;
}

export default App;
