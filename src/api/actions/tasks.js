import { httpClient } from "../instance";
import { apiConstants } from "@/utils/constants";

const { TODOS_API_URL } = apiConstants;


// READMTODOS_API_URLE: запрос с сервера вернет массив Task
// const Task = {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }


/**
 * Запрос всех задач
 * @returns Task[]
 */
export const getTasklist = async () => {
  const res = await httpClient.get(TODOS_API_URL);
  if (res.status !== 200) {
    const errorMessage = JSON.stringify({
      text: res.statusText,
      code: res.status
    });
    return new Error(errorMessage);
  } 
  return res.data;
  
  // .then((response) => {
  //   if (response.status !== 200){
  //     console.log({
  //       status: response.status,
  //       text: response.text
  //     })
  //     return null;
  //   }

  //   return response.data;
  // }).catch(error => {
  //   console.log(error);
  // })
};

/**
 * Запрос всех задач
 * @param {number} taskId - id задачи
 * @returns Task[]
 */
export const getTaskById = async (taskId) => {
  return httpClient.get(`${TODOS_API_URL}/${taskId}`).then((response) => {
    if (response.status !== 200){
      console.log({
        status: response.status,
        text: response.text
      });
      return null;
    }

    return response.data;
  }).catch(error => {
    console.log(error);
  })
};

