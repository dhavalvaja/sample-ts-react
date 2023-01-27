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
        <div className="card max-w-fit">
          <div className="">
            <img src={pokemon.imgUrl} alt="" />
            <div>
              <h1 className="">
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              </h1>
              <p className="">
                Types:
                {pokemon.types.map((type, index) => {
                  return (
                    <span key={index} className="">
                      {type}
                    </span>
                  );
                })}
              </p>
              <p className="">
                Abilities:
                {pokemon.abilities.map((ability, index) => {
                  return <span key={index}>{ability}</span>;
                })}
              </p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              {/* <p >{abilities}</p> */}
              <button
                className="btn m-3"
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
        <div>{error !== "" ? <p>{error}</p> : "Loading..."}</div>
      )}
    </>
  );
}
