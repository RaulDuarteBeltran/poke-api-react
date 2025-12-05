import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";

interface PokeCartaProps {
  id: number;
}

function PokeCarta(props: PokeCartaProps) {
  const { id } = props;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const ObtenerPokemon = async function (id: number) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      const pokemonObtenido = Pokemon.FromJson(data);
      setPokemon(pokemonObtenido);
    };
    ObtenerPokemon(id);
  }, []);

  if (!pokemon) return <h2>Cargando...</h2>;
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
