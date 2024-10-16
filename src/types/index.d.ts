// API Types
export interface ListPokemon {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetail {
    abilities: Ability[];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

interface Ability {
    ability: {
        name: string;
        url: string;
    }
}

interface Sprites {
    front_default: string;
}

interface Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}

interface Type {
    slot: number;
    type: {
        name: string;
    }
}

export interface AbilityList {
    count: number;
    next: string;
    previous: string;
    results: Ability[];
}

export interface Ability {
    name: string;
}

// Components Types
export interface PokemonListProps {
    listPokemon: PokemonDetail[];
}

export interface PokemonPreviewProps {
    pokemon: PokemonDetail;
    pokeTeam?: string;
}

export interface PokemonTypeListProps {
    listTypes: Type[];
}

export interface PokemonTypeProps {
    typeName: Type['type']['name'];
}

export interface InputProps {
    styles?: string,
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TypeOptions {
    value: string;
    label: string;
}

interface DropdownMenuProps {
    options: TypeOptions[];
    onChange: (value: string) => void;
    placeholder?: string;
    styles?: string;
}

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    style?: string;
    color?: string;
}

export interface PokemonTeamsList {
    listPokemon: PokemonTeam[]
}

export type PokemonTeams = PokemonTeam[]

export interface PokemonTeam {
    name: string;
    pokemons: PokemonDetail[];
}

export interface PokemonsTeamsContextType {
    pokemonsTeams: PokemonTeams;
    addPokemonTeam: (nameTeam: string) => void;
    addPokemonToTeam: (nameTeam: string, pokemon: PokemonDetail) => void;
    removePokemonFromTeam: (nameTeam: string, pokemon: PokemonDetail) => void;
    removePokemonTeam: (nameTeam: string) => void;
    updatePokemonNameTeam: (nameTeam: string, newName: string) => void;
}

export interface ModalAddPokemonToTeamProps {
    toggleModal: () => void;
    pokemon: PokemonDetail; 
}

export interface ModalActionTeamProps {
    toggleModal: () => void;
    type: 'edit' | 'delete';
    oldName?: string;
}