import { useEffect, useState } from "react";
// import { pokemons } from "./Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import { Pokemon } from "./Pokemon";
import fetchPokemon from "./PokemonAPI";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon().then((data: Pokemon[]) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div className="container border mt-3 bg-light ">
      <h1 className="text-center my-3">List of Pokemons</h1>
      {pokemons.length > 0 && (
        <div className="card d-flex p-3 m-3">
          <p>Name: {pokemons[currentPokemon].name}</p>
          <p>Power: {pokemons[currentPokemon].power}</p>
          <p>Color: {pokemons[currentPokemon].color}</p>
        </div>
      )}
      <div className=" d-flex p-3 mt-3 flex-wrap">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <PokemonDetails
                pokemon={pokemon}
                key={index}
                index={index}
                setCurrentPokemon={setCurrentPokemon}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
