/*
 Leaderboard Component: 
   - list all users's scores
 */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import LeaderboardCard from "./LeaderboardCard";

class Leaderboard extends Component {
	render() {
		console.log(this.props);
		const { leaderboardData } = this.props;
		return (
			<div className="my-container">
				{leaderboardData.map((data) => (
					<LeaderboardCard key={data.id} data={data} />
				))}
			</div>
		);
	}
}

/*
  - get all users and their data to pass to Leaderboard Card Component
   - Object.values not keys?
 */
const mapStateToProps = ({ users }) => {
	const leaderboardData = Object.values(users)
		.map((user) => ({
			id: user.id,
			name: user.name,
			avatarURL: user.avatarURL,
			answerCount: Object.keys(user.answers).length,
			questionCount: user.questions.length,
			totalScore:
				Object.values(user.answers).length + user.questions.length
		}))
		.sort((a, b) => b.totalScore - a.totalScore);

	return {
		leaderboardData
	};
};

export default connect(mapStateToProps)(Leaderboard);
