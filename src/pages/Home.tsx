import { useEffect, useMemo, useState } from "react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { usePokemons } from "../hooks/usePokemons"
import { PokemonList } from "../components/PokemonList"
import { typeOptions } from "../utils"
import { Input } from "../components/Input"
import { DropDownMenu } from "../components/DropDownMenu"

export const Main = () => {
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.5 })
  const { pokemons, abilities, loadMorePokemons } = usePokemons()
  const [name, setName] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedAbility, setSelectedAbilitie] = useState<string>('')

  useEffect(() => {
    if (isIntersecting && pokemons.length > 0) {
      loadMorePokemons()
    }
  }, [isIntersecting])

  const filteredPokemon = useMemo(() => {
    return pokemons.filter((pokemon) => {
      // Filter by name
      const matchesName = name.length === 0 ||
        pokemon.name.includes(name);

      // Filter by type
      const matchesType = selectedType.length === 0 ||
        pokemon.types.some((type) => selectedType.includes(type.type.name))

      // Filter by ability
      const matchesAbility = selectedAbility.length === 0 ||
        pokemon.abilities.some((ability) => selectedAbility.includes(ability.ability.name))

      // Return the result depending on the filters
      return matchesName && matchesType && matchesAbility
    })
  }, [pokemons, name, selectedType, selectedAbility])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.toLocaleLowerCase())
  }

  const handleChangeType = (value: string) => {
    setSelectedType(value)
  }

  const handleChangeAbility = (value: string) => {
    setSelectedAbilitie(value)
  }

  return (
    <section className="basic-spacing">
      <section className="flex sm:flex-row flex-col justify-start gap-4 mb-6 w-full">
        <Input
          styles="w-full md:max-w-lg"
          placeholder="Search for a pokemon"
          value={name}
          onChange={handleChangeName}
        />

        <div className="w-full flex flex-row gap-4">
          <DropDownMenu 
            styles="w-full"
            options={typeOptions}
            onChange={(value) => handleChangeType(value)}
            placeholder="All types"
          />

          <DropDownMenu
            styles="w-full"
            options={abilities}
            onChange={(value) => handleChangeAbility(value)}
            placeholder="All abilities"
          />
        </div>

      </section>

      <PokemonList listPokemon={filteredPokemon} />

      <span ref={ref}></span>
    </section>
  )
}
