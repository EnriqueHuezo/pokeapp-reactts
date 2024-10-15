import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { PokemonTeamList } from "../components/PokemonTeamList"
import { usePokemonsTeams } from "../hooks/usePokemonsTeams"
import React, { useState } from "react"

export const PokeTeam = () => {
    const { pokemonsTeams, addPokemonTeam } = usePokemonsTeams()
    const [nameTeam, setNameTeam] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addPokemonTeam(nameTeam)
        setNameTeam('')
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameTeam(e.target.value)
    }

    return (
        <section className="basic-spacing">
            <div className="flex flex-col gap-12">
                <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                    <h1 className="title-text md:max-w-2xl w-full">
                        Build your invincible <span className="text-primary">pokemon</span> team!
                    </h1>

                    <div className="flex items-end w-full">
                        <form onSubmit={handleSubmit} className="flex md:flex-col flex-row gap-2 flex-1 items-end">
                            <Input
                                onChange={handleInput}
                                value={nameTeam}
                                placeholder="Team Name"
                                styles="w-full max-w-[400px]"
                            />

                            <Button
                                label='Create Team'
                                style="max-w-[200px] w-full"
                            />
                        </form>
                    </div>
                </div>

                <PokemonTeamList pokemonsTeamList={pokemonsTeams} />

            </div>
        </section>
    )
}
