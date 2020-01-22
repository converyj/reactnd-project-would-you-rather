/*

Users Action Creators
 - recieve users 
 - add questions and answers to user 
*/

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

/* 
Add question id and answer to user's (authedUser) answer property
Parameters: answer - object type containing author, id (question id) and option chosen
*/
export function addAnswerToUser(authedUser, qid, answer) {
	return {
		type: ADD_ANSWER_TO_USER,
		authedUser,
		qid,
		answer
	};
}

/*
Add poll id to user's (authedUser) questions array
Parameter: question - object type containing author (authedUser) and id (question id)
*/
export function addQuestionToUser({ author, id }) {
	return {
		type: ADD_QUESTION_TO_USER,
		author,
		id
	};
}
