/*
Poll Results Component:
  - display options 
  - display how many people/percentage voted for each option
 - highlight the option that was selected by user (authedUser)
*/

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Progress, Segment, Label, Button } from "semantic-ui-react";
import { styles } from "./../utils/helpers";
import { withRouter } from "react-router-dom";

const YourVoteLabel = () => (
	<span className="label badge-md badge-pill badge-success">Your Vote</span>
);
class PollResults extends Component {
	handleClick = () => {
		this.props.history.push("/");
	};

	render() {
		const { question, user } = this.props;

		const optionOne = question.optionOne.text;
		const optionTwo = question.optionTwo.text;
		const optionOneVotes = question.optionOne.votes.length;
		const optionTwoVotes = question.optionTwo.votes.length;
		const votesTotal = optionOneVotes + optionTwoVotes;
		const userVote = user.answers[question.id];
		console.log(userVote);
		console.log(optionOneVotes, optionTwoVotes);
		let option1 = styles.secondary,
			option2 = styles.secondary;
		if (optionOneVotes > optionTwoVotes) {
			console.log(optionOneVotes);
			option1 = styles.primary;
		}
		else if (optionTwoVotes > optionOneVotes) {
			console.log(optionTwoVotes);
			option2 = styles.primary;
		}

		console.log("Option1:", option1, "Option2:", option2);

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
					<p>
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
					<p>
						{optionTwoVotes} out of {votesTotal}
					</p>
				</div>
				<button className="btn-info" onClick={this.handleClick}>
					Back
				</button>
			</Fragment>
		);
	}
}

/*
 - get user (authedUser) object
*/
const mapStateToProps = ({ users, authedUser }) => {
	const user = users[authedUser];

	return {
		user
	};
};

export default withRouter(connect(mapStateToProps)(PollResults));
