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

