import React, { useState } from "react"
import { PokemonTeamListProps } from "../../types"
import { useModal } from "../../hooks/useModal"
import { Button } from "../commons/Button"
import { PokemonCardPreview } from "./PokemonCardPreview"
import { ModalActionTeam } from "../modals/ModalActionTeam"
import pokemonGroup from "../../assets/pokemon-group.png"

export const PokemonTeamList: React.FC<PokemonTeamListProps> = ({ pokemonsTeamList }) => {
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

  if (pokemonsTeamList.length === 0) return (
    <div className="flex flex-col items-center gap-4">
      <figure>
        <img
          className={""}
          src={pokemonGroup}
          alt="Group image"
        />
      </figure>
      <p className="title-text text-gray-500 !font-semibold text-center">Start by adding your first pokemon team!</p>
    </div>
  )

  return (
    <section className="flex flex-col gap-8">
      {pokemonsTeamList.map((pokemonTeam) => (
        <div key={pokemonTeam.name} className="flex flex-col gap-4 border border-gray-200 py-6 px-4 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <h2 className="secondary-text">{pokemonTeam.name}</h2>
            <div className="flex md:flex-row flex-col gap-2">
              <Button label="Edit Team" type="filled" onClick={() => handleEditTeamName(pokemonTeam.name)} />
              <Button label="Delete Team" type="filled" onClick={() => handleDeleteTeam(pokemonTeam.name)} />
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {pokemonTeam.pokemons.length > 0 ? pokemonTeam.pokemons.map((pokemon) => (
              <PokemonCardPreview key={pokemon.id} pokemon={pokemon} pokemonTeam={pokemonTeam.name} />
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
