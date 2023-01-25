import axios from "axios";
import { Pokemon } from "./Pokemon";


let nextUrl: string = ""
let index = 0

export async function fetchPokemon(): Promise<Pokemon[]> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=9")
    nextUrl = data.next
    index = 1
    const pokemons: Pokemon[] = data.results
        .map((pokemon: any): Pokemon => {
            const temp = {
                id: index,
                name: pokemon.name,
                height: 0,
                weight: 0,
                types: [],
                imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
            }
            index = index + 1
            return temp
        })
    return pokemons;
}

export async function fetchPokemonByNameOrId(nameOrId: string): Promise<Pokemon> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/" + nameOrId)
    return {
        id: data?.id,
        name: data?.name,
        height: data?.height,
        weight: data?.weight,
        types: data.types.map((elemnt: any) => {
            return elemnt.type.name
        }),
        imgUrl: data.sprites.other["official-artwork"]["front_default"]
    }
}

export async function fetchMorePokemon(): Promise<Pokemon[]> {
    const { data } = await axios.get(nextUrl)
    nextUrl = data.next
    const pokemons: Pokemon[] = data.results
        .map((pokemon: any): Pokemon => {
            const temp = {
                id: index,
                name: pokemon.name,
                height: 0,
                weight: 0,
                types: [],
                imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
            }
            index = index + 1
            return temp
        })
    return pokemons;
}