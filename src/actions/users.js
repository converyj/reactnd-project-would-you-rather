/*
- recieve users 
*/

import { _getUsers } from "./../utils/_DATA";

export const GET_USERS = "GET_USERS";

function recieveUsers(users) {
	return {
		type: GET_USERS,
		users
	};
}

export function handleRecieveUsers() {
	return (dispatch) => {
		return _getUsers().then((users) => {
			dispatch(recieveUsers(users));
		});
	};
}
