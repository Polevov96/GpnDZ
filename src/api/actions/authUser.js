import { httpClient } from "../instance";
import { apiConstants } from "@/utils/constants";
//TODO: 1) создать api для получения пользователей  (только обработак запроса на сервере и возврат данных)

const { USER_API_URL } = apiConstants;

export const getUser = async () => {
    let res;
    console.log("GetUser");
    try {
        res = await httpClient.get(USER_API_URL);
    } catch (err){
        console.log(err);
    }

    if(!res) {
        const errorMessage = JSON.stringify({
            text: res.statusText,
            code: res.status
        });
        return new Error(errorMessage);
    }
   localStorage.setItem('usersList', JSON.stringify(res.data));
        return res.data;
};