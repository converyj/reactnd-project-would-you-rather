/*
* Dashboard Component Responsible for:
	- Showing authedUser's answered/unanswered questions 
	- Show users and their questions 
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveQuestions } from "../actions/questions";
import { setAuthedUser } from "./../actions/authedUser";

export class Dashboard extends Component {
	render() {
		console.log(this.props);
		// tab view of answered and unanswered questions from props
		return <div />;
	}
}

/*
*   - get the authedUser information from users object
	- get the answered questions 
	   - get the keys from authedUser's answers property
	- get the unanswered questions 
	  - get the keys from the questions object and filter out the ones that are in the answer property 
   - 
*/
const mapStateToProps = ({ questions, users, authedUser }) => {
	const user = users[authedUser];
	const answeredQuestions = Object.keys(user.answers).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	);
	const unansweredQuestions = Object.keys(questions)
		.filter((qid) => !answeredQuestions.includes(qid))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
	return {
		unansweredQuestions,
		answeredQuestions
	};
};

export default connect(mapStateToProps)(Dashboard);
