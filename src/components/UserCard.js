/*
UserCard Component (Container) is responsible for: 
 - displaying card header and avatar 
 - displaying each of the following child components depending if the URL has question_id
	- Poll - if question_id doesn't exist
	- PollQuestion - if question_id does exist but is unanswered
	- PollResults - if question_id does exist and it is answered 
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import PollQuestion from "./PollQuestion";
import PollResults from "./PollResults";

// object of constants for type of polls
const pollTypes = {
	POLL: "POLL",
	POLL_QUESTION: "POLL_QUESTION",
	POLL_RESULTS: "POLL_RESULTS"
};

// display either Poll, PollQuestion or PollResults Components based on pollType
const PollContent = (props) => {
	const { pollType, question, unanswered } = props;

	switch (pollType) {
		case pollTypes.POLL:
			return <Poll question={question} unanswered={unanswered} />;
		case pollTypes.POLL_QUESTION:
			return <PollQuestion question={question} unanswered={unanswered} />;
		case pollTypes.POLL_RESULTS:
			return <PollResults question={question} unanswered={unanswered} />;
		default:
			return;
	}
};

class UserCard extends Component {
	render() {
		console.log(this.props);
		const { author, question, pollType, unanswered } = this.props;

		return (
			<div>
				<div className="card text-center">
					<div className="card-header">
						<p className="text-left">{author.name} asks: </p>
					</div>
					<div className="card-body">
						<div className="container">
							<div className="row">
								<div className="col">
									<img src={author.avatarURL} alt="" />
								</div>
								<div className="col text-left">
									{/* pass child component what it needs from connect */}
									<PollContent
										pollType={pollType}
										question={question}
										unanswered={unanswered}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/*
- figure out which child components to display depending on the URL question_id
	- if question_id doesn't exist
		- save the question with id passed from Dashboard 
		- set pollType to POLL
	- if question_id does exist
		- get the question_id from URL 
		- save the question
		- set pollType to POLL_QUESTION
	    - check if the question has been answered already to know whether to display PollQuestion or PollResults
		  - get the authedUser from the users object 
		  - check authedUser's answer property against the question_id 
			 - set pollType to POLL_RESULTS 
	- get the author of the question 
*/
const mapStateToProps = (
	{ users, questions, authedUser },
	{ match, question_id }
) => {
	let question, pollType;
	console.log(authedUser);

	if (question_id !== undefined) {
		question = questions[question_id];
		pollType = pollTypes.POLL;
	}
	else {
		const { question_id } = match.params;
		question = questions[question_id];
		pollType = pollTypes.POLL_QUESTION;

		const user = users[authedUser];
		if (Object.keys(user.answers).includes(question_id)) {
			pollType = pollTypes.POLL_RESULTS;
		}
	}

	const author = users[question.author];

	// return question to display, who wrote the question, what type of poll
	return {
		question,
		author,
		pollType
	};
};

export default connect(mapStateToProps)(UserCard);
