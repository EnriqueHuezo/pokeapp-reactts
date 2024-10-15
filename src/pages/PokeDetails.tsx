import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { PokemonDetail } from "../types"
import { PokemonRepository } from "../api/repositories/PokeRepository"
import { calculateStat, colours, pastelColours, stats } from "../utils"
import { PokemonTypeList } from "../components/PokemonTypeList"
import { Button } from "../components/Button"
import { useModal } from "../hooks/useModal"
import { ModalAddTeam } from "../components/ModalAddTeam"

export const PokeDetails = () => {
    const { pokemonId } = useParams()
    const { isOpen, toggleModal } = useModal()
    const [pokemon, setPokemon] = useState<PokemonDetail>()
    
    useEffect(() => {
        PokemonRepository.getPokemonDetail(pokemonId)
            .then(response => setPokemon(response))
    }, [pokemonId])

    const typeColorPastel = pastelColours[pokemon?.types[0].type.name as keyof typeof pastelColours]
    const typeColor = colours[pokemon?.types[0].type.name as keyof typeof colours]

    return (
        <section className='h-dvh w-full md:flex md:flex-row md:justify-center md:items-center' style={{ background: typeColorPastel }}>
            <div className='md:basic-spacing pt-28 md:gap-8 flex md:flex-row-reverse flex-col md:h-auto h-full'>
                <figure className='flex flex-col flex-1 justify-center items-center'>
                    <figcaption className='text-4xl font-black first-letter:uppercase' style={{ color: typeColor }}>{pokemon?.name}</figcaption>
                    <p className='text-9xl font-bold text-white/90'>00{pokemon?.id}</p>
                    <img className="object-fill md:size-70 size-40 relative -top-20 z-20" src={pokemon?.sprites.front_default} alt='sprite' />
                </figure>

                <div className='bg-white md:rounded-3xl rounded-t-3xl z-10 flex-grow md:mt-0 -mt-36'>
                    <div className='p-4 md:pt-16 md:pb-16 pt-12 pb-8 flex flex-col gap-6'>
                        <div className='pt-4'>
                            <PokemonTypeList listTypes={pokemon?.types || []} />
                        </div>

                        <div className='flex flex-row justify-center items-center gap-6'>
                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-2xl'>{pokemon?.base_experience}</p>
                                <p>Base exp</p>
                            </div>

                            <div className="border-l border-gray-200 self-stretch" />

                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-2xl'>{pokemon?.weight} lbs</p>
                                <p>Weight</p>
                            </div>

                            <div className="border-l border-gray-200 self-stretch" />

                            <div className='flex flex-col items-center'>
                                <p className='font-bold text-2xl'>{pokemon?.height} ft</p>
                                <p>Height</p>
                            </div>
                        </div>

                        <div className='flex lg:flex-row flex-col lg:gap-8 gap-4'>
                            <div className='lg:flex-1'>
                                {
                                    pokemon?.stats.map(stat => (
                                        <div key={stat.stat.name} className='flex flex-row justify-between items-center gap-4'>
                                            <div className='flex flex-row gap-6'>
                                                <p className='font-bold w-8' style={{ color: typeColor }}>{stats[stat?.stat.name as keyof typeof stats]}</p>
                                                <p className='font-bold w-8'>{stat.base_stat}</p>
                                            </div>

                                            <div className='w-full h-2 rounded-full' style={{ background: typeColorPastel }}>
                                                <div className='h-full rounded-full' style={{ width: `${calculateStat(stat.base_stat)}%`, background: typeColor }} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='lg:w-1/3'>
                                <p className='font-bold text-2xl pb-2'>Abilities</p>
                                <div className='flex flex-col gap-2'>
                                    {
                                        pokemon?.abilities.map(ability => (
                                            <div key={ability.ability.name} className='flex flex-row px-2 py-1 border rounded-xl' style={{ borderColor: typeColorPastel }}>
                                                <p className='font-bold first-letter:uppercase' style={{ color: typeColor }}>{ability.ability.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-center'>
                            <Button
                                label='Recruit'
                                onClick={toggleModal}
                                color={typeColor}
                                style={'max-w-[300px] w-full'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen && pokemon && (
                    <ModalAddTeam
                        toggleModal={toggleModal}
                        pokemon={pokemon}
                    />
                )
            }
        </section>
    )
}