import axios from "axios";
import { Pokemon } from "./Pokemon";

// const pokemons: Pokemon[] = [
//     {
//         id: 1,
//         name: 'Pikachu',
//         color: 'yellow',
//         power: 1,
//         imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`
//     },
//     {
//         id: 2,
//         name: 'Eevee',
//         color: 'brown',
//         power: 2,
//         imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png`
//     },
//     {
//         id: 3,
//         name: 'Ditto',
//         color: 'purple',
//         power: 3,
//         imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png`
//     },
//     {
//         id: 4,
//         name: 'Charmilion',
//         color: 'purple',
//         power: 3,
//         imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png`
//     },
//     {
//         id: 5,
//         name: 'Charmender',
//         color: 'purple',
//         power: 3,
//         imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png`
//     },
// ]

export async function fetchPokemon(): Promise<Pokemon[]> {
    const {data}= await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=25")
    const pokemons : Pokemon[] = data.results.map((pokemon: any, index: number) : Pokemon=>{
        return {
            id: index + 1,
            name : pokemon.name,
            height : 0,
            width : 0,
            types : [],
            imgUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index +1}.png`
        }
    })
    return pokemons;
}

// export function fetchPokemonByName(name: string): Promise<Pokemon> {
    
// }
