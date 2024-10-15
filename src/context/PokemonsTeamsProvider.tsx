import React, { createContext, useState } from "react";
import { PokemonDetail, PokemonsTeamsContextType, PokemonTeams } from "../types";
import { useToasts } from "../hooks/useToasts";

export const PokemonsTeamsContext = createContext<PokemonsTeamsContextType | undefined>(undefined)

export const PokemonsTeamsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pokemonsTeams, setPokemonsTeams] = useState<PokemonTeams>(() => {
        const storedTeams = localStorage.getItem('pokemonsTeams')
        return storedTeams ? JSON.parse(storedTeams) : []
    })
    const { successToast, errorToast } = useToasts()
    
    const updateLocalStorage = (pokemonsTeams: PokemonTeams) => {
        localStorage.setItem('pokemonsTeams', JSON.stringify(pokemonsTeams))
    }

    const addPokemonTeam = (nameTeam: string) => {
        // Check if the team name is empty
        if(!nameTeam.trim()) {
            errorToast('The team name cannot be empty')
            return
        }

        // Check if the team name already exists
        const teamExist = pokemonsTeams.some(team => team.name === nameTeam)
        if(teamExist) {
            errorToast('The team name already exists')
            return
        }

        // Create a new team
        const newTeam = { name: nameTeam, pokemons: []}
        const updatedTeams = [...pokemonsTeams, newTeam]
        setPokemonsTeams(updatedTeams)
        updateLocalStorage(updatedTeams)
        successToast('Team created successfully')
    }

    const removePokemonTeam = (nameTeam: string) => {
        const updatedTeams = pokemonsTeams.filter(team => team.name !== nameTeam)
        setPokemonsTeams(updatedTeams)
        updateLocalStorage(updatedTeams)
        successToast('Team deleted successfully')
    }

    const addPokemonToTeam = (nameTeam: string, pokemon: PokemonDetail) => {
        let isPokemonAdded = false;
        
        if (!nameTeam.trim()) {
            errorToast('The team name cannot be empty');
            return;
        }

        const updatedTeams = pokemonsTeams.map(team => {
            if (team.name === nameTeam) {
                if (team.pokemons.length === 6) {
                    errorToast('The team already has 6 pokemons (maximum)');
                    return team;
                }
    
                const pokemonExist = team.pokemons.some(p => p.name === pokemon.name);
                if (pokemonExist) {
                    errorToast('The pokemon already exists in the team');
                    return team;
                }
    
                isPokemonAdded = true;
                return { ...team, pokemons: [...team.pokemons, pokemon] };
            }
            return team;
        });

        if (isPokemonAdded) {
            setPokemonsTeams(updatedTeams);
            updateLocalStorage(updatedTeams);
            successToast('Pokemon successfully added to the team');
        }
    };

    const removePokemonFromTeam = (nameTeam: string, pokemon: PokemonDetail) => {
        const updatedTeams = pokemonsTeams.map(team => {
            if (team.name === nameTeam) {
                const filteredPokemons = team.pokemons.filter(p => p.name !== pokemon.name)
                return { ...team, pokemons: filteredPokemons } 
            }

            return team 
        })
    
        setPokemonsTeams(updatedTeams)
        updateLocalStorage(updatedTeams)
        successToast('Pokemon removed from the team')
    }

    return (
        <PokemonsTeamsContext.Provider value={{ pokemonsTeams, addPokemonTeam, addPokemonToTeam, removePokemonFromTeam, removePokemonTeam }}>
            {children}
        </PokemonsTeamsContext.Provider>
    )
}