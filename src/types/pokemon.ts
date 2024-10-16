export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface APIList<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export interface Pokemon extends NamedAPIResource {}

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

export interface Ability {
    ability: NamedAPIResource;
    slot: number;
}

export interface AbilityDetail extends NamedAPIResource {}

interface Sprites {
    front_default: string;
}

interface Stat {
    base_stat: number;
    stat: NamedAPIResource;
}

interface Type {
    slot: number;
    type: NamedAPIResource;
}

export interface PokemonListProps {
    listPokemon: PokemonDetail[];
}

export interface PokemonCardPreviewProps {
    pokemon: PokemonDetail;
    pokemonTeam?: string;
}

export interface PokemonTypeListProps {
    listTypes: Type[];
}

export interface PokemonTypeProps {
    typeName: string;
}