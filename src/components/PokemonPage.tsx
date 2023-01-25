import { useState, useEffect } from "react";
import { Pokemon } from "../Pokemon";
import { fetchMorePokemon, fetchPokemon } from "../PokemonAPI";
import PokemonDetails from "./PokemonDetails";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetchPokemonAsyncAwait();
  }, []);

  function loadMore() {
    fetchMorePokemon().then((value) => {
      setPokemons((prev) => [...prev, ...value]);
    });
  }

  async function fetchPokemonAsyncAwait() {
    try {
      const pokemons = await fetchPokemon();
      setPokemons(pokemons);
    } catch (error: any) {
      setMsg(error.m);
    }
  }
  return (
    <div className="container shadow-lg border mt-3 bg-light p-3 d-flex flex-column ">
      <h1 className="text-center display-5 my-3">List of Pokemons</h1>
      <div className=" d-flex p-3 flex-wrap">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <PokemonDetails pokemon={pokemon} key={index} index={index} />
            );
          })
        ) : (
          <div>{msg}</div>
        )}
      </div>
      <button
        className="btn btn-lg btn-primary position-fixed m-3 bottom-0 end-0"
        style={{
          boxShadow:"4px 4px 4px 0px blue",
    
        }}
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
}
