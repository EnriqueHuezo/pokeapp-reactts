import React from 'react'
import { PokemonDetail, PokemonPreviewProps } from '../types'
import { PokemonTypeList } from './PokemonTypeList'
import { useLocation, useNavigate } from 'react-router'
import { usePokemonsTeams } from '../hooks/usePokemonsTeams'
import { Button } from './Button'

export const PokemonCardPreview: React.FC<PokemonPreviewProps> = ({ pokeTeam, pokemon }) => {
    const { removePokemonFromTeam } = usePokemonsTeams()
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`)
    }

    const handleRemovePokemonFromTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        removePokemonFromTeam(pokeTeam as string, pokemon as PokemonDetail)
    }

    return (
        <article onClick={handleClick} className="w-full rounded-lg bg-white drop-shadow-xl p-4">
            {location.pathname === "/poketeams" && (
               <Button 
                   onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleRemovePokemonFromTeam(e) }}
                   label="Remove"
                />
            ) }
            <div className="relative flex justify-center items-center w-full h-32">
                <figure className="relative text-center">
                    <img src={pokemon?.sprites.front_default} alt="sprite" className="relative z-10 max-w-full h-auto" />
                    <figcaption className="absolute inset-0 flex justify-center items-center text-9xl text-black opacity-10 z-0 font-bold">
                        #{pokemon?.id}
                    </figcaption>
                </figure>
            </div>

            <div className="w-full flex flex-col gap-4">
                <p className="text-gray-700 text-xl font-bold text-center first-letter:uppercase">
                    {pokemon?.name}
                </p>

                <PokemonTypeList listTypes={pokemon?.types} />
            </div>
        </article>
    )
}
