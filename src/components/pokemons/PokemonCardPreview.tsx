import React from 'react'
import { PokemonCardPreviewProps } from '../../types'
import { useLocation, useNavigate } from 'react-router'
import { usePokemonsTeams } from '../../hooks/usePokemonsTeams'
import { Button } from '../commons/Button'
import { PokemonTypeList } from './PokemonTypeList'
import { formatIdWithNumeral } from '../../utils'

export const PokemonCardPreview: React.FC<PokemonCardPreviewProps> = ({ pokemonTeam, pokemon }) => {
    const { removePokemonFromTeam } = usePokemonsTeams()
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`)
    }

    const handleRemovePokemonFromTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (pokemonTeam && pokemon) {
            removePokemonFromTeam(pokemonTeam, pokemon);
        }
    }

    return (
        <article onClick={handleClick} className="w-full rounded-lg bg-white drop-shadow-xl p-4">
            {location.pathname === "/poketeams" && (
               <Button 
                   onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleRemovePokemonFromTeam(e) }}
                   label="Remove"
                   type='filled'
                />
            ) }
            <div className="relative flex justify-center items-center w-full h-32">
                <figure className="relative text-center">
                    <img src={pokemon?.sprites.front_default} alt="sprite" className="relative z-10 max-w-full h-auto" />
                    <figcaption className="absolute inset-0 flex justify-center items-center text-9xl text-black opacity-10 z-0 font-bold">
                        {pokemon?.id && formatIdWithNumeral(pokemon.id)}
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
