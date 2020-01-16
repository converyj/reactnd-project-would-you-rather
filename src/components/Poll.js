/*
Poll Component (Presentional) is responsible for showing the specific poll (answered and unanswered) 
  - display question that was passed 
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { btnColors } from "./../utils/helpers";

class Poll extends Component {
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
