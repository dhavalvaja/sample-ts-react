import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [pokemonsCount, setPokemonsCount] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  function fetchPokemon() {
    if (searchQuery !== "") {
      let temp = searchQuery.toLowerCase();
      navigate(`/viewdetails/${temp}`);
    }
    setSearchQuery("");
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
          <button className="btn btn-secondary mx-3" onClick={fetchPokemon}>Search</button>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
