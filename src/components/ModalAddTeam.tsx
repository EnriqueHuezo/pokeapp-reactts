import { useState } from "react"
import { usePokemonsTeams } from "../hooks/usePokemonsTeams"
import { ModalAddTeamProps } from "../types"
import { DropdownMenu } from "./DropDownMenu"
import { Button } from "./Button"
import { Input } from "./Input"

export const ModalAddTeam: React.FC<ModalAddTeamProps> = ({ toggleModal, pokemon }) => {
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
        if(inputTeamName.length > 0) {
            toggleModal()
            setInputTeamName('')
        }
    }

    const handleAddPokemonToTeam = () => {
        addPokemonToTeam(inputTeamName, pokemon)
        if(inputTeamName.length > 0) {
            toggleModal()
            setInputTeamName('')
        }
    }

    console.log(inputTeamName)

    return (
        <div className="absolute w-full h-dvh top-0 left-0 flex justify-center items-center">
            <div className="fixed bg-overlay top-0 left-0 w-full h-dvh z-50" onClick={toggleModal} />
            <div className="w-full max-w-xl bg-white relative z-[60] p-4 m-4 rounded-lg">
                {
                    pokemonsTeams.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="secondary-text">Choose a team!</p>
                                <p className="">Select the team where your Pokémon will be part, guide them to victory</p>
                            </div>

                            <div className="flex sm:flex-row flex-col gap-4">
                                <DropdownMenu 
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
