import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import "./App.css";
import PokeCarta from "./PokeCarta";

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(35);
  return (
    <>
      <select
        onChange={(event) => {
          const selectedValue = event.target.value;
          const parsedValue = Number.parseInt(selectedValue);
          setSelectedPokemonId(parsedValue);
        }}
        value={selectedPokemonId}
      >
        <option value={35}>Clefairy</option>
        <option value={387}>Tortuig</option>
        <option value={397}>Staravia</option>
        <option value={493}>Arceus</option>
        <option value={6}>Charizard</option>
      </select>
      <PokeCarta id={selectedPokemonId} />
    </>
  );
}

export default App;
