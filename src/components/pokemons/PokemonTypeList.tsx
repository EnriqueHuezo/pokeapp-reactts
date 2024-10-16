import React from "react"
import { PokemonTypeListProps } from "../../types"
import { PokemonType } from "./PokemonType"

export const PokemonTypeList: React.FC<PokemonTypeListProps> = ({ listTypes }) => {
  return (
    <div className="w-full flex flex-row gap-2 justify-center">
        {
            listTypes.map((type) => (
                <PokemonType key={type.type.name} typeName={type.type.name} />
            ))
        }
    </div>
  )
}
