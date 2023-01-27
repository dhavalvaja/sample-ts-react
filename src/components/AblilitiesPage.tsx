import usePokemonAbilityApi from "../hooks/usePokemonAbilityApi";

export default function AblilitiesPage() {
  const { abilities, error, isLoding } = usePokemonAbilityApi();

  return (
    <div className="d-flex flex-wrap">
      {abilities &&
        abilities.map((ability, index) => {
          return (
            <div
              key={index}
              className="card m-3 p-3"
              style={{ width: "17rem" }}
            >
              <h1>{ability.name}</h1>
              <a href={ability.url}>
                <p>{ability.url}</p>
              </a>
            </div>
          );
        })}
    </div>
  );
}
