import { instance } from "../instance";


/**
 * Авторизация пользователя. Чистая функция, выполняет только посталенную ей задачу - отправка запроса на сервер и возврат ответа.
 * @param {string} login 
 * @param {string} password 
 * @returns User || null
 */
export const login = async function(login, password){
  return instance.post("", {
    login,
    password
  }).then((response) => {
    if(response.status !== 200){
      console.log({
        status: response.status,
        text: response.text
      })
      return null;
    }

    return response.data;

  }).catch(error => {
    console.log(error);
  })
}

// TODO: реализовать метод logout аналогично login