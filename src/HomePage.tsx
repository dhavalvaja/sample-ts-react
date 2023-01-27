import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import usePokemonApi from "./hooks/usePokemonApi";
import { Pokemon } from "./Pokemon";

export default function HomePage() {
  // const [loacalpokemons, setLoacalPokemons] = useState<Pokemon[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [msg, setMsg] = useState("Loading...");

  const { error, isLoding, pokemons } = usePokemonApi();

  useEffect(() => {
    // setLoacalPokemons(pokemons);
    setSearchedPokemons(pokemons);
  }, [pokemons]);

  const navigate = useNavigate();

  function searchPokemon() {
    if (searchQuery !== "") {
      let temp = searchQuery.toLowerCase();
      navigate(`/viewdetails/${temp}`);
    }
    setSearchQuery("");
  }

  useEffect(() => {
    setSearchedPokemons([
      ...pokemons.filter((pokemon) => pokemon.name.startsWith(searchQuery)),
    ]);
  }, [pokemons, searchQuery]);

  return (
    <>
      <div className="d-flex shadow-lg align-items-center justify-content-between border">
        <h1
          className="display-4 mx-5"
          onClick={() => {
            navigate("/");
          }}
        >
          PokeAPI
        </h1>
        <SearchBar
          pokemons={pokemons}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchPokemon={searchPokemon}
          setSearchedPokemons={setSearchedPokemons}
        />
      </div>
      <Outlet context={{ pokemons, searchedPokemons, msg }}></Outlet>
    </>
  );
}
