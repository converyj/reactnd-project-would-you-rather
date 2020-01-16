/*
Poll Component (Presentional) is responsible for showing the specific poll (answered and unanswered) 
  - display question that was passed 
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Poll extends Component {
	render() {
		const { question, unanswered } = this.props;

		return (
			<div>
				<p className="bold">Would You Rather</p>
				<div className="my-container">
					<p className="text-center">
						{question.optionOne.text} or...
					</p>
					<Link
						to={`/questions/${question.id}`}
						className="btn btn-accent">
						{
							unanswered ? "Answer Poll" :
							"Results"}
					</Link>
				</div>
			</div>
		);
	}
}

export default Poll;
