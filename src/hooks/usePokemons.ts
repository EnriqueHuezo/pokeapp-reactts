import { useEffect, useState } from "react";
import { PokemonDetail, TypeOptions } from "../types";
import { PokemonRepository } from "../api/repositories/PokeRepository";


export function usePokemons() {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
    const [abilities, setAbilities] = useState<TypeOptions[]>([]);
    const [nextUrl, setNextUrl] = useState<string | undefined>('/');
    
    const getPokemons = async (nextUrl: string = "?offset=0&limit=20") => {
        const response = await PokemonRepository.getPokemonList(nextUrl);
        const { results, next } = response;

        const newPokemons = await Promise.all(
            results.map(async (pokemon) => {
                const response = await PokemonRepository.getPokemonDetail(pokemon.name);
                return response;
            })
        );

        return { newPokemons, next };
    }

    const loadPokemons = async () => {
        const { newPokemons, next } = await getPokemons();
        setPokemons(newPokemons);
        setNextUrl(next);
    }

    const loadMorePokemons = async () => {
        const formattedNextUrl = nextUrl?.split('/').pop();
        const { newPokemons, next } = await getPokemons(formattedNextUrl);
        setPokemons(prev => [...prev, ...newPokemons]);
        setNextUrl(next);
    }

    const loadPokemonsAbilities = async () => {
        const response = await PokemonRepository.getPokemonAbilities();
        const setAbilitiesFormat = response.results.map((ability) => ({
            value: ability.name,
            label: ability.name.charAt(0).toUpperCase() + ability.name.slice(1),
        }))
        setAbilities(setAbilitiesFormat);
    }

    useEffect(() => { 
        loadPokemons() 
        loadPokemonsAbilities();
    }, []);

    return { pokemons, abilities, loadMorePokemons };
}