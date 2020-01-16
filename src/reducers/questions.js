/* 
- handle questions slice of state
*/

import {
	RECEIVE_QUESTIONS,
	ADD_ANSWER_TO_QUESTION,
	ADD_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};

		/*
		Add user (authedUser) to question's votes property depending on which answer
		why repeating? 
		*/
		case ADD_ANSWER_TO_QUESTION:
			const { qid, answer, authedUser } = action;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: [
							...state[qid][answer].votes,
							authedUser
						]
					}
				}
			};
		case ADD_QUESTION:
			const { question } = action;
			console.log(question);

			return {
				...state,
				[question.id]: {
					question
				}
			};
		default:
			return state;
	}
}
