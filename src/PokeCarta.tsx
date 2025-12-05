import { useEffect, useState } from "react";
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
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { id } = props;
  console.log(id);

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  useEffect(() => {
    const CargarPokemon = async function (id: number) {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await result.json();
      const pokemonObtenido = Pokemon.FromJson(data);
      setPokemon(pokemonObtenido);
    };
    CargarPokemon(id);
  }, [id]);

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
