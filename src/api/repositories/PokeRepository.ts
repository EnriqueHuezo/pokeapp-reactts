import { AbilityDetail, APIList, PokemonDetail } from "../../types";
import { AxiosResponse } from "axios";
import { ApiClient } from "../ApiClient";

export const PokemonRepository = {
    async getPokemonList(url: string | undefined): Promise<APIList<PokemonDetail>> {
        const response: AxiosResponse<APIList<PokemonDetail>> = await ApiClient.get(`/pokemon/${url}`);
        return response.data;
    },

    async getPokemonDetail(id: string | undefined): Promise<PokemonDetail> {
        const response: AxiosResponse<PokemonDetail> = await ApiClient.get(`/pokemon/${id}`);
        return response.data;
    },

    async getPokemonAbilities(): Promise<APIList<AbilityDetail>> {
        const response: AxiosResponse<APIList<AbilityDetail>> = await ApiClient.get(`/ability?offset=0&limit=367`);
        return response.data;
    },

}