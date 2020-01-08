/* 
- get questions and stick them in state slice
*/

import { RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
	console.log(action);
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		default:
			return state;
	}
}
