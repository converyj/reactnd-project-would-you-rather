/*

Question Action Creators
- get all questions 
- save questions and answers 
*/

import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

import { addAnswerToUser, addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

/* 
Add poll question to questions object 
Parameters: question - object type containing question
*/
function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

/*
 Handle saving new poll 
  - call saveQuestion passing author, optionOne, optionTwo
  - addQuestionToUser - add poll to user's (authedUser) questions array 
	 - purpose: Sum up all to questions user asked in Leaderboard Component 
  - addQuestion - add poll question list 
	 - purpose: add to question list in Dashboard Component
  - accept parameters: optionOne, optionTwo text 
*/
export function handleSaveQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		dispatch(showLoading());

		return saveQuestion({
			author: authedUser,
			optionOneText: optionOne,
			optionTwoText: optionTwo
		})
			.then((question) => {
				dispatch(addQuestionToUser(question));
				dispatch(addQuestion(question));
			})
			.then(() => dispatch(hideLoading()));
	};
}

/*
Add user (authedUser) to question's votes property depending on which answer 
Parameters: answer - object type containing author, id (question id) and option chosen
 */
function addAnswerToQuestion(authedUser, qid, answer) {
	return {
		type: ADD_ANSWER_TO_QUESTION,
		authedUser,
		qid,
		answer
	};
}

/*
Handle saving answer to poll
  - addAnswerToUser - add question id and answer to user's answer property
	- purpose: show in correct column in Dashboard Component
  - addAnswerToQuestion - add user to question's votes property
    - purpose: highlight correct option in PollResults Component 
  - accepts parameters: qid, answer 
*/
export function handleSaveQuestionAnswer(question, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		const qid = question.id;

		dispatch(showLoading());

		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		})
			.then(() => {
				dispatch(addAnswerToUser(authedUser, qid, answer));
				dispatch(addAnswerToQuestion(authedUser, qid, answer));
			})
			.then(() => dispatch(hideLoading()));
	};
}
