/*
Poll Results Component (Container):
  - display options 
  - display how many people/percentage voted for each option
 - highlight the option that was selected by user (authedUser)
*/

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { styles } from "./../utils/helpers";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

// show 'Your Vote' label on the option that was answered by the user
const YourVoteLabel = () => (
	<span className="label badge-md badge-pill badge-success">Your Vote</span>
);
class PollResults extends Component {
	static propTypes = {
		question: PropTypes.object.isRequired,
		user: PropTypes.object.isRequired
	};

	handleClick = () => {
		this.props.history.push("/");
	};

	render() {
		const { question, user } = this.props;

		// variables to use
		const optionOne = question.optionOne.text;
		const optionTwo = question.optionTwo.text;
		const optionOneVotes = question.optionOne.votes.length;
		const optionTwoVotes = question.optionTwo.votes.length;
		const votesTotal = optionOneVotes + optionTwoVotes;
		const userVote = user.answers[question.id];

		// set the colors of the two options to highlight the one the user answered
		let option1 = styles.secondary,
			option2 = styles.secondary;
		if (userVote === "optionOne") {
			option1 = styles.primary;
		}
		else {
			option2 = styles.primary;
		}

		return (
			<Fragment>
				<h2>Results:</h2>
				<div
					className="results p-3 mb-2"
					style={{
						color: option1.color,
						backgroundColor: option1.bgColor
					}}>
					{userVote === "optionOne" && <YourVoteLabel />}
					<h3>{optionOne}</h3>

					<div className="progress">
						<div
							className="progress-bar"
							role="progressbar"
							style={{
								width: `${(optionOneVotes /
									votesTotal *
									100).toFixed(1)}%`,
								backgroundColor: option1.color
							}}
							aria-valuemin="0"
							aria-valuemax="100">
							{(optionOneVotes / votesTotal * 100).toFixed(1)}%
						</div>
					</div>
					<p className="text-center">
						{optionOneVotes} out of {votesTotal}
					</p>
				</div>
				<div
					className="results p-3 mb-2"
					style={{
						color: option2.color,
						backgroundColor: option2.bgColor
					}}>
					{userVote === "optionTwo" && <YourVoteLabel />}

					<h3>{optionTwo}</h3>

					<div className="progress">
						<div
							className="progress-bar"
							role="progressbar"
							style={{
								width: `${(optionTwoVotes /
									votesTotal *
									100).toFixed(1)}%`,
								backgroundColor: option2.color
							}}
							aria-valuemin="0"
							aria-valuemax="100">
							{(optionTwoVotes / votesTotal * 100).toFixed(1)}%
						</div>
					</div>
					<p className="text-center">
						{optionTwoVotes} out of {votesTotal}
					</p>
				</div>
				<button
					className="btn btn-secondary"
					onClick={this.handleClick}>
					Back
				</button>
			</Fragment>
		);
	}
}

/*
 - get authedUser object to access their answers property
*/
const mapStateToProps = ({ users, authedUser }) => {
	const user = users[authedUser];

	return {
		user
	};
};

export default withRouter(connect(mapStateToProps)(PollResults));
