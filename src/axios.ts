import axios from "axios"

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
})
export const tokenInstance = axios.create({
  baseURL: `${import.meta.env.VITE_TOKEN_URL}`,
})
