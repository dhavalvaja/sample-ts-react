import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import { fetchPokemon } from "./PokemonAPI";
import PokemonDetails from "./components/PokemonDetails";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetchPokemonAsyncAwait();
  }, []);

  async function fetchPokemonAsyncAwait() {
    try {
      const pokemons = await fetchPokemon();
      setPokemons(pokemons);
    } catch (error: any) {
      setMsg(error.m);
    }
  }
  return (
    <div className="container border mt-3 bg-light ">
      <h1 className="text-center my-3">List of Pokemons</h1>
      <div className=" d-flex p-3 mt-3 flex-wrap">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <PokemonDetails
                pokemon={pokemon}
                key={index}
                index={index}
              />
            );
          })
        ) : (
          <div>{msg}</div>
        )}
      </div>
    </div>
  );
}
