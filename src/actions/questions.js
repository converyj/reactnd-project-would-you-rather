/*
- get all authedUser's answered and unanswered questions 
*/

import { _getQuestions } from "../utils/_DATA";

const GET_QUESTIONS = "GET_QUESTIONS";

function recieveQuestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}

export function handleRecieveQuestions() {
	return (dispatch) => {
		return _getQuestions().then((questions) => {
			dispatch(recieveQuestions(questions));
		});
	};
}
