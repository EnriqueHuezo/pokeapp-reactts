import { PokemonDetail } from './pokemon';

export interface PokemonTeam {
    name: string;
    pokemons: PokemonDetail[];
}

export interface PokemonTeamListProps {
    pokemonsTeamList: PokemonTeam[];
}

export type PokemonTeams = PokemonTeam[];

export interface PokemonsTeamsContextType {
    pokemonsTeams: PokemonTeam[];
    addPokemonTeam: (nameTeam: string) => void;
    addPokemonToTeam: (nameTeam: string, pokemon: PokemonDetail) => void;
    removePokemonFromTeam: (nameTeam: string, pokemon: PokemonDetail) => void;
    removePokemonTeam: (nameTeam: string) => void;
    updatePokemonNameTeam: (nameTeam: string, newName: string) => void;
}