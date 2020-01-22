/*
Poll Component (Presentional) is responsible:
 - showing the specific poll (answered and unanswered) 
 - display teaser of question that was passed 
 - link to PollQuestion Component
*/
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { btnColors } from "./../utils/helpers";
import { PropTypes } from "prop-types";

class Poll extends Component {
	static propTypes = {
		question: PropTypes.object.isRequired,
		unanswered: PropTypes.bool.isRequired
	};

	handleClick = () => {
		const { question } = this.props;

		this.props.history.push(`/questions/${question.id}`);
	};

	render() {
		const { question, unanswered } = this.props;

		const buttonColor =

				unanswered === true ? btnColors.primary :
				btnColors.secondary;

		const buttonContent =

				unanswered === true ? "Answer Poll" :
				"Results";

		return (
			<div>
				<p className="bold">Would You Rather</p>
				<div className="my-container">
					<p className="text-center">
						{question.optionOne.text}
						<br />
						or...
					</p>
					<button
						onClick={this.handleClick}
						className={`btn btn-block ${buttonColor.color}`}>
						{buttonContent}
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Poll);
