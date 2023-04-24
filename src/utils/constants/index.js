// бонусом сделал константу с фильтрами, не ошибешься в написании
// импортируем константу и в блоке с кнопками-фильтрами и в сторе
export const FiltersConstants = {
	"ALL": "all",
	"IN_PROGRESS": "inProgress",
	"DONE": "done",
	"OPEN_TASK": "openTask",
}

export const apiConstants = {
	//https://jsonplaceholder.typicode.com
	BASE_API_URL: "https://jsonplaceholder.typicode.com",
	TODOS_API_URL: "/todos",
	AUTH_LOGIN_API_URL: "/auth/login",
	AUTH_LOGOUT_API_URL: "/auth/logout",
	USER_API_URL: "/users"
};