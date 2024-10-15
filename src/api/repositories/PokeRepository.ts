import { AbilityList, ListPokemon, PokemonDetail } from "../../types";
import { AxiosResponse } from "axios";
import { ApiClient } from "../ApiClient";

export const PokemonRepository = {
    async getPokemonList(url: string | undefined): Promise<ListPokemon> {
        const response: AxiosResponse<ListPokemon> = await ApiClient.get(`/pokemon/${url}`);
        return response.data;
    },

    async getPokemonDetail(id: string | undefined): Promise<PokemonDetail> {
        const response: AxiosResponse<PokemonDetail> = await ApiClient.get(`/pokemon/${id}`);
        return response.data;
    },

    async getPokemonAbilities(): Promise<AbilityList> {
        const response: AxiosResponse<AbilityList> = await ApiClient.get(`/ability?offset=0&limit=367`);
        return response.data;
    },

}