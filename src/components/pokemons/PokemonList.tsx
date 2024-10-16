import React from "react"
import { PokemonListProps } from "../../types"
import { PokemonCardPreview } from "./PokemonCardPreview"

export const PokemonList: React.FC<PokemonListProps> = ({ listPokemon }) => {
  return (
    <section className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {listPokemon.map((pokemon, index) => (
            <PokemonCardPreview key={index} pokemon={pokemon} />
        ))}
    </section>
  )
}
