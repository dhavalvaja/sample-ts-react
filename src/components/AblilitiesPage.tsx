import usePokemonAbilityApi from "../hooks/usePokemonAbilityApi";

export default function AblilitiesPage() {
  const { abilities, error, isLoding } = usePokemonAbilityApi();

  return (
    <div className="">
      {abilities &&
        abilities.map((ability, index) => {
          return (
            <div key={index} className="">
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
