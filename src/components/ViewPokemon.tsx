import { useNavigate, useParams } from "react-router-dom";
import usePokemonDetailsApi, {
  usePokemonDetailsApiProps,
} from "../hooks/usePokemonDetailsApi";

export default function ViewPokemon() {
  const { nameOrId } = useParams();
  let props: usePokemonDetailsApiProps = nameOrId
    ? { nameOrId }
    : { nameOrId: 0 };

  const { error, isLoding, pokemon } = usePokemonDetailsApi(props);

  const navigate = useNavigate();

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
              <p className="fw-semibold">
                Abilities:
                {pokemon.abilities.map((ability, index) => {
                  return (
                    <span
                      key={index}
                      className="ms-2 badge bg-primary text-wrap"
                    >
                      {ability}
                    </span>
                  );
                })}
              </p>
              <p className="fw-semibold">Height: {pokemon.height}</p>
              <p className="fw-semibold">Weight: {pokemon.weight}</p>
              {/* <p className="fw-semibold">{abilities}</p> */}
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
