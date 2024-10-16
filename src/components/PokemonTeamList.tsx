import React, { useState } from "react"
import { PokemonTeams } from "../types"
import { PokemonCardPreview } from "./PokemonCardPreview"
import { Button } from "./Button"
import { useModal } from "../hooks/useModal"
import { ModalActionTeam } from "./ModalActionTeam"

export const PokemonTeamList: React.FC<{ pokemonsTeamList: PokemonTeams }> = ({ pokemonsTeamList }) => {
  const { isOpen, toggleModal } = useModal()
  const [type, setType] = useState<'edit' | 'delete'>('edit')
  const [oldName, setOldName] = useState<string>('')

  const handleEditTeamName = (oldName: string) => {
    setType('edit')
    setOldName(oldName)
    toggleModal()
  }

  const handleDeleteTeam = (oldName: string) => {
    setType('delete')
    setOldName(oldName)
    toggleModal()
  }

  return (
    <section className="flex flex-col gap-8">
      {pokemonsTeamList.map((pokemonTeam) => (
        <div key={pokemonTeam.name} className="flex flex-col gap-4 border border-gray-200 py-6 px-4 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <h2 className="secondary-text">{pokemonTeam.name}</h2>
            <div className="flex md:flex-row flex-col gap-2">
              <Button label="Edit Team" onClick={() => handleEditTeamName(pokemonTeam.name)}/>
              <Button label="Delete Team" onClick={() => handleDeleteTeam(pokemonTeam.name)} />
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {pokemonTeam.pokemons.length > 0 ? pokemonTeam.pokemons.map((pokemon) => (
              <PokemonCardPreview key={pokemon.id} pokemon={pokemon} pokeTeam={pokemonTeam.name} />
            )) : (
              <p className="secondary-text">No pokemons in this team</p>
            )}
          </div>
        </div>
      ))
      }

      {
        isOpen && (
          <ModalActionTeam 
            toggleModal={toggleModal}
            type={type}
            oldName={oldName} />
        )
      }
    </section>
  )
}
