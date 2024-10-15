import React from 'react'
import { PokemonTypeProps } from '../types'
import { pastelColours } from '../utils'

export const PokemonType: React.FC<PokemonTypeProps> = ({ typeName }) => {
    const typeColor = pastelColours[typeName as keyof typeof pastelColours]

    return (
        <div className="rounded-lg px-4 py-2" style={{ background: typeColor }}>
            <p className="text-white text-center text-sm font-bold">
                {typeName.toUpperCase()}
            </p>
        </div>
    )
}
