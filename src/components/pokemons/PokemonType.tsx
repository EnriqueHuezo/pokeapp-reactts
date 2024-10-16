import React from 'react'
import { pastelColours } from '../../utils'
import { PokemonTypeProps } from '../../types'

export const PokemonType: React.FC<PokemonTypeProps> = ({ typeName }) => {
    const typeColor = pastelColours[typeName || '#A8A8A8']

    return (
        <div className="rounded-lg px-4 py-2" style={{ background: typeColor }}>
            <p className="text-white text-center text-sm font-bold">
                {typeName.toUpperCase()}
            </p>
        </div>
    )
}
