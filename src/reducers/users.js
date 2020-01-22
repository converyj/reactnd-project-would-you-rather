/*
- handle user slice of state  
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
		*/
		case ADD_ANSWER_TO_USER:
			const { authedUser, qid, answer } = action;
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
