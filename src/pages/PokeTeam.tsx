import { Button } from "../components/commons/Button"
import { ModalActionTeam } from "../components/modals/ModalActionTeam"
import { PokemonTeamList } from "../components/pokemons/PokemonTeamList"
import { useModal } from "../hooks/useModal"
import { usePokemonsTeams } from "../hooks/usePokemonsTeams"

export const PokeTeam = () => {
    const { pokemonsTeams } = usePokemonsTeams()
    const { isOpen, toggleModal } = useModal()

    return (
        <section className="basic-spacing">
            <div className="flex-1 flex flex-col flex-grow gap-12">
                <div className="flex md:flex-row flex-col justify-between items-start gap-4">
                    <h1 className="title-text md:max-w-2xl w-full">
                        Build your invincible <span className="text-primary">pokemon</span> team!
                    </h1>

                    <div className="flex justify-end flex-1">
                        <Button
                            type="filled"
                            label='Create Team'
                            style="max-w-[300px] w-full"
                            onClick={toggleModal}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <PokemonTeamList pokemonsTeamList={pokemonsTeams} />
                </div>
            </div>

            {
                isOpen && (
                    <ModalActionTeam
                        toggleModal={toggleModal}
                        type='add'
                    />
                )
            }
        </section>
    )
}
