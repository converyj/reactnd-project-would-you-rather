/*
- get all authedUser's answered and unanswered questions 
*/

import { _getQuestions } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
	console.log(questions);
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

export function handleReceiveQuestions() {
	return (dispatch) => {
		return _getQuestions().then((questions) => {
			dispatch(receiveQuestions(questions));
		});
	};
}
