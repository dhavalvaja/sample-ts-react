import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Pokemon } from "./Pokemon";
import { fetchMorePokemon, fetchPokemon } from "./PokemonAPI";

export default function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [msg, setMsg] = useState("Loading...");

  const navigate = useNavigate();

  function fetchPokemon1() {
    if (searchQuery !== "") {
      let temp = searchQuery.toLowerCase();
      navigate(`/viewdetails/${temp}`);
    }
    setSearchQuery("");
  }

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
        <div className="d-flex">
          <input
            className="form-control"
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-secondary mx-3" onClick={fetchPokemon1}>
            Search
          </button>
        </div>
      </div>
      <Outlet context={{ pokemons, setPokemons, msg }}></Outlet>
    </>
  );
}
