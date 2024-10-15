import React from "react"
import {  PokemonTeams } from "../types"
import { PokemonCardPreview } from "./PokemonCardPreview"
import { Button } from "./Button"
import { usePokemonsTeams } from "../hooks/usePokemonsTeams"

export const PokemonTeamList: React.FC<{ pokemonsTeamList: PokemonTeams }> = ({ pokemonsTeamList }) => {
  const { removePokemonTeam } = usePokemonsTeams()
  

  return (
    <section className="flex flex-col gap-8">
      { pokemonsTeamList.map((pokemonTeam) => (
        <div key={pokemonTeam.name} className="flex flex-col gap-4 shadow-md px-4 py-8 rounded-xl">
          <div className="flex flex-row justify-between">
            <h2 className="secondary-text">{pokemonTeam.name}</h2>
            <Button label="Delete Team" onClick={() => removePokemonTeam(pokemonTeam.name)}/>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            { pokemonTeam.pokemons.length > 0 ? pokemonTeam.pokemons.map((pokemon) => (
              <PokemonCardPreview key={pokemon.id} pokemon={pokemon} pokeTeam={pokemonTeam.name} />
            )) : (
              <p className="secondary-text">No pokemons in this team</p>
            )}
          </div>
        </div>
        ))
      }
    </section>
  )
}
