import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
// import usePokemonApi from "./hooks/usePokemonApi";
import { Pokemon } from "./Pokemon";

export default function HomePage() {
  const [searchedPokemons, setSearchedPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [msg] = useState("Loading...");

  
  const navigate = useNavigate();

  function searchPokemon() {
    if (searchQuery !== "") {
      let temp = searchQuery.toLowerCase();
      navigate(`/viewdetails/${temp}`);
    }
    setSearchQuery("");
  }

  return (
    <>
      <div className="nav">
        <h1
          className="title"
          onClick={() => {
            navigate("/");
          }}
        >
          Poemon changedHeading
        </h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchPokemon={searchPokemon}
          setSearchedPokemons={setSearchedPokemons}
        />
      </div>
      <Outlet context={{ searchedPokemons, msg }}></Outlet>
    </>
  );
}
