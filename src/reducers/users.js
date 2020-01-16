/*
- get the users and stick them in state slice  
*/

import {
	RECEIVE_USERS,
	ADD_ANSWER_TO_USER,
	ADD_QUESTION_TO_USER
} from "./../actions/users";

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};

		/*
		Add question id and answer to user's (authedUser) answer property
		why repeating?
		*/
		case ADD_ANSWER_TO_USER:
			const { authedUser, qid, answer } = action;
			console.log(action);
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};

		/*
		Add poll id to user's (authedUser) questions array
		why does _saveQuestion in _DATA.js file declare the questions object before using it and this doesn't?
	 	*/
		case ADD_QUESTION_TO_USER:
			const { author, id } = action;

			return {
				...state,
				[author]: {
					...state[author],
					questions: [
						...state[author].questions,
						id
					]
				}
			};
		default:
			return state;
	}
}
