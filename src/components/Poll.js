/*
Poll Component (Presentional) is responsible for showing the specific poll (answered and unanswered) 
  - get id that was passed 
  - get the question associated with the id 
  - "View Poll" will link to the Poll Page 
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Poll extends Component {
	render() {
		console.log(this.props);
		const { question } = this.props;
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
						View Poll
					</Link>
				</div>
			</div>
		);
	}
}

/*
 - get the poll question associated to the specific id 
 - get the user associated to the specific id 
*/
// const mapStateToProps = ({ questions, users }, { id }) => {
// 	const poll = questions[id];
// 	const user = users[poll.author];
// 	return {
// 		poll,
// 		user
// 	};
// };

export default Poll;
