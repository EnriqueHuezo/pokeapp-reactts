import { useState } from "react"
import { usePokemonsTeams } from "../../hooks/usePokemonsTeams"
import { ModalAddPokemonToTeamProps } from "../../types"
import { DropDownMenu } from "../commons/DropDownMenu"
import { Button } from "../commons/Button"
import { Input } from "../commons/Input"

export const ModalAddPokemonToTeam: React.FC<ModalAddPokemonToTeamProps> = ({ toggleModal, pokemon }) => {
    const { pokemonsTeams, addPokemonToTeam, addPokemonTeam } = usePokemonsTeams()
    const [inputTeamName, setInputTeamName] = useState('')

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTeamName(event.target.value)
    }

    const onTeamSelected = (value: string) => {
        setInputTeamName(value)
    }

    const handleAddPokemonTeam = () => {
        addPokemonTeam(inputTeamName)
        if (inputTeamName.length > 0) {
            toggleModal()
            setInputTeamName('')
        }
    }

    const handleAddPokemonToTeam = () => {
        addPokemonToTeam(inputTeamName, pokemon)
        if (inputTeamName.length > 0) {
            toggleModal()
            setInputTeamName('')
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-overlay" onClick={toggleModal} />
            <div className="w-full max-w-xl bg-white relative z-[60] p-6 m-4 rounded-lg">
                {
                    pokemonsTeams.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="secondary-text">Choose a team!</p>
                                <p className="">Select the team where your Pokémon will be part, guide them to victory</p>
                            </div>

                            <div className="flex sm:flex-row flex-col gap-4">
                                <DropDownMenu
                                    options={pokemonsTeams.map(team => ({ value: team.name, label: team.name }))}
                                    onChange={onTeamSelected}
                                    placeholder="Select Team"
                                    styles="w-full"
                                />

                                <Button
                                    label="Add pokemon"
                                    onClick={handleAddPokemonToTeam}
                                    color="red"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="secondary-text">You dont have a team!</p>
                                <p className="">To recruit a pokemon, you must have at least one team. Start by creating your first team by entering its name in the box below</p>
                            </div>

                            <div className="flex sm:flex-row flex-col gap-4">
                                <Input
                                    onChange={handleInput}
                                    placeholder="Team Name"
                                    value={inputTeamName}
                                    styles="w-full"
                                />

                                <Button
                                    label="Create Team"
                                    onClick={handleAddPokemonTeam}
                                    color="red"
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
