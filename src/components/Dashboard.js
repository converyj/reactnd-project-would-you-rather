/*
* Dashboard Component (Container) Responsible for:
	- Showing authedUser's answered/unanswered questions 
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { PropTypes } from "prop-types";

export class Dashboard extends Component {
	static propTypes = {
		unansweredQuestions: PropTypes.array.isRequired,
		answeredQuestions: PropTypes.array.isRequired
	};

	render() {
		// tab view of answered and unanswered questions from props
		return (
			<div className="my-container">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							id="home-tab"
							data-toggle="tab"
							href="#unanswered"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							Unanswered Questions
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="profile-tab"
							data-toggle="tab"
							href="#answered"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							Answered Questions
						</a>
					</li>
				</ul>
				<div className="tab-content">
					<div
						className="tab-pane fade show active"
						id="unanswered"
						role="tabpanel"
						aria-labelledby="home-tab">
						{this.props.unansweredQuestions.map((id) => (
							<UserCard
								key={id}
								question_id={id}
								unanswered={true}
							/>
						))}
					</div>
					<div
						className="tab-pane fade"
						id="answered"
						role="tabpanel"
						aria-labelledby="profile-tab">
						{this.props.answeredQuestions.map((id) => (
							<UserCard
								key={id}
								question_id={id}
								unanswered={false}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

/*
    - get the authedUser information from users object
	- get the answered questions 
	   - get the keys from authedUser's answers property
	- get the unanswered questions 
	  - get the keys from the questions object and filter out the ones that are in the user's answer property 
	- The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom)
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
