import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon";
import { useState, useEffect } from "react";
import { fetchPokemonByNameOrId } from "../PokemonAPI";

export default function ViewPokemon() {
  // const location = useLocation();
  // const pokemon: Pokemon = location.state;
  const { nameOrId } = useParams();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState("");

  async function fetch() {
    if (nameOrId) {
      try {
        const temp = await fetchPokemonByNameOrId(nameOrId);
        setPokemon(temp);
      } catch (error: any) {
        setError(error.response.data);
      }
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    fetch();
  }, [nameOrId]);

  return (
    <>
      {pokemon ? (
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center m-3">
            <img src={pokemon.imgUrl} alt="" />
            <div>
              <h1 className="fs-1 fw-lighter mb-3">
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              </h1>
              <p className="fw-semibold">
                Types:
                {pokemon.types.map((type, index) => {
                  return (
                    <span
                      key={index}
                      className="ms-2 badge bg-primary text-wrap"
                    >
                      {type}
                    </span>
                  );
                })}
              </p>
              <p className="fw-semibold">Height: {pokemon.height}</p>
              <p className="fw-semibold">Weight: {pokemon.weight}</p>
          <button
            className="btn btn-dark "
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {error !== "" ? (
            <p className="alert alert-danger m-3">{error}</p>
          ) : (
            "Loading..."
          )}
        </div>
      )}
    </>
  );
}
