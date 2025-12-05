import { useState } from "react";
import { Pokemon } from "./Pokemon";

interface PokeCartaProps {
  pokemon: Pokemon;
}

const pokeEjemplo = new Pokemon(
  35,
  "Clefairy",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
  ["Hada"]
);

function PokeCarta(props: PokeCartaProps) {
  const { pokemon } = props;
  return (
    <article className="poke-carta">
      <h2>{pokemon.Id}</h2>
      <img src={pokemon.SpriteURL} />
      <h3>{pokemon.Nombre}</h3>
      <>
        {pokemon.Tipos.map((tipo) => {
          return <h4>{tipo}</h4>;
        })}
      </>
    </article>
  );
}

export default PokeCarta;
