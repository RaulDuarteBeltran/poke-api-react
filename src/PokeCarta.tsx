import { useState } from "react";
import { Pokemon } from "./Pokemon";

interface PokeCartaProps {
  id: number;
}

const pokeEjemplo = new Pokemon(
  35,
  "Clefairy",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  ["Hada"]
);

function PokeCarta(props: PokeCartaProps) {
  const { id } = props;
  return (
    <article className="poke-carta">
      <h2>{pokeEjemplo.Id}</h2>
      <img src={pokeEjemplo.SpriteURL} />
      <h3>{pokeEjemplo.Nombre}</h3>
      <>
        {pokeEjemplo.Tipos.map((tipo) => {
          return <h4>{tipo}</h4>;
        })}
      </>
    </article>
  );
}

export default PokeCarta;
