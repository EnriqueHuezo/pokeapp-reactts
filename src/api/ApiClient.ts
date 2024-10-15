import axios, { AxiosInstance } from "axios";

export const ApiClient: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: { "Content-Type": "application/json" },
})