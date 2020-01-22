/* 
PollQuestion Component (Container) Responsible for:
 - displaying the options
 - get the authedUser to save answer 
 - dispatch event to save answer
*/

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { btnColors } from "../utils/helpers";

import { handleSaveQuestionAnswer } from "./../actions/questions";
import { PropTypes } from "prop-types";

class PollQuestion extends Component {
	static propTypes = {
		question: PropTypes.object.isRequired
	};

	state = {
		option: ""
	};

	handleChoice = (e) => {
		this.setState({ option: e.target.value });
	};

	saveAnswer = (e) => {
		const { dispatch, question } = this.props;
		const { option } = this.state;

		e.preventDefault();
		dispatch(handleSaveQuestionAnswer(question, option));
	};

	render() {
		const { question } = this.props;
		const { option } = this.state;

		const disabled =

				option === "" ? true :
				false;

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
					<button
						className={`btn btn-block ${btnColors.primary.color}`}
						type="submit"
						disabled={disabled}>
						Submit
					</button>
				</form>
			</Fragment>
		);
	}
}

export default connect()(PollQuestion);
