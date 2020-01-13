/* 
PollQuestion Component Responsible for:
 - displaying the options
 - get the authedUser to save answer 
 - dispatch event to save answer
*/

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { handleSaveQuestionAnswer } from "./../actions/questions";

class PollQuestion extends Component {
	state = {
		option: "",
		goHome: false
	};

	handleChoice = (e) => {
		this.setState({ option: e.target.value });
	};

	saveAnswer = (e) => {
		const { dispatch, question } = this.props;
		const { option } = this.state;
		e.preventDefault();

		dispatch(handleSaveQuestionAnswer(question, option));
		this.setState({ goHome: true });
	};

	render() {
		const { question } = this.props;
		const { option, goHome } = this.state;

		if (goHome) {
			return <Redirect to={"/"} />;
		}

		return (
			<Fragment>
				<h2>Would You Rather...</h2>
				<form onSubmit={this.saveAnswer}>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="option"
							id="optionOne"
							onChange={this.handleChoice}
							value="optionOne"
							checked={option === "optionOne"}
						/>
						<label className="form-check-label" htmlFor="optionOne">
							{question.optionOne.text}
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="option"
							id="optionTwo"
							onChange={this.handleChoice}
							value="optionTwo"
							checked={option === "optionTwo"}
						/>
						<label className="form-check-label" htmlFor="optionTwo">
							{question.optionTwo.text}
						</label>
					</div>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</Fragment>
		);
	}
}

export default connect()(PollQuestion);
