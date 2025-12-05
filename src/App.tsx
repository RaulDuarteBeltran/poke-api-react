import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import "./App.css";
import PokeCarta from "./PokeCarta";

function App() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);

  useEffect(() => {
    const ids = [];
    for (let i = 1; i <= 10; i++) {
      ids.push(i);
    }
    setPokemonIds(ids);
  }, []);

  if (pokemonIds.length === 0) return <h1>No hay pokemons :(</h1>;
  return (
    <>
      {pokemonIds.map((pokemonId) => {
        return <PokeCarta id={pokemonId} />;
      })}
    </>
  );
}

export default App;
