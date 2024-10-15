import React from 'react'
import { PokemonPreviewProps } from '../types'
import { PokemonTypeList } from './PokemonTypeList'
import { useNavigate } from 'react-router'

export const PokemonCardPreview: React.FC<PokemonPreviewProps> = ({ pokemon }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`)
    }

    return (
        <article onClick={handleClick} className="w-full rounded-lg bg-white drop-shadow-xl p-4">
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
