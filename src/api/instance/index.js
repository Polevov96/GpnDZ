import axios from "axios";
import { apiConstants } from "@/utils/constants";

/**
 * В инстансе можно сделать базовую настройку и потом переиспользовать ее везде
 * Очень полезно так делать если потом хотим навесить доп функциоанал.
 */
export const instance = axios.create({
  baseURL: apiConstants.BASE_API_URL,
})