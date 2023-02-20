import { httpClient } from "../instance";
import { apiConstants } from "@/utils/constants";
//TODO: 1) создать api для получения пользователей  (только обработак запроса на сервере и возврат данных)

const { USER_API_URL } = apiConstants;

export const getUser = async () => {
    const res = await httpClient.get(USER_API_URL);
    if(!res) {
        const errorMessage = JSON.stringify({
            text: res.statusText,
            code: res.status
        });
        return new Error(errorMessage);
    }
    return res.data;
}