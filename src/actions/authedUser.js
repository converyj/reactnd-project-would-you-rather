/* 

AuthedUser Action Creator 
- set the authedUser when signing in
*/

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	};
}
