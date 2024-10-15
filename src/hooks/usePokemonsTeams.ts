import { useContext } from "react"
import { PokemonsTeamsContext } from "../context/PokemonsTeamsProvider"

export const usePokemonsTeams = () => {
    const context = useContext(PokemonsTeamsContext)
    if (!context) {
        throw new Error('Something went wrong with the context')
    }
    return context
}