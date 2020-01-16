/*
New Poll Component responsible for: 
  - set text of new poll 
  - dispatch action to save new poll 
*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { handleSaveQuestion } from "./../actions/questions";

class NewPoll extends Component {
	state = {
		optionOne: "",
		optionTwo: ""
	};

	setOption = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	addQuestion = (e) => {
		e.preventDefault();

		this.props.dispatch(
			handleSaveQuestion(this.state.optionOne, this.state.optionTwo)
		);

		this.props.history.push("/");
	};

	render() {
		const { optionOne, optionTwo } = this.state;

		return (
			<Fragment>
				<div className="card">
					<div className="card-header text-center">
						<h1>Create New Question</h1>
					</div>
					<div className="card-body">
						<p className="card-text">Complete the questions</p>
						<h5 className="card-title">Would You Rather...</h5>
						<form onSubmit={this.addQuestion}>
							<div className="form-group">
								<input
									type="text"
									className="form-control form-control-lg"
									id="optionOne"
									name="optionOne"
									value={optionOne}
									onChange={this.setOption}
									aria-describedby="optionOne"
									placeholder="Enter Option One..."
								/>
							</div>
							<div className="divider">
								<span>OR</span>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control form-control-lg"
									id="optionTwo"
									name="optionTwo"
									value={optionTwo}
									onChange={this.setOption}
									aria-describedby="optionTwo"
									placeholder="Enter Option Two..."
								/>
							</div>
							<button type="submit" className="btn">
								Submit
							</button>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default connect()(NewPoll);
