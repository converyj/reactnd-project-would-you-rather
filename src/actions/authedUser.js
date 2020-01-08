/* 
- set the authedUser when signing in
*/

export const SET_AUTHED_USER = "SET_AUTHED_USER";

// fix
// const id = 'sarahedo'
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	};
}
