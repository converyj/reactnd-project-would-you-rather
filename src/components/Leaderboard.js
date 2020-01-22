/*
 Leaderboard Component (Container): 
   - list all users's scores
 */

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import LeaderboardCard from "./LeaderboardCard";
import { PropTypes } from "prop-types";

class Leaderboard extends Component {
	static propTypes = {
		leaderboardData: PropTypes.array.isRequired
	};

	render() {
		const badges = [
			"yellow",
			"grey",
			"orange"
		];

		const { leaderboardData } = this.props;

		return (
			<div className="my-container">
				{leaderboardData.map((data, id) => (
					<LeaderboardCard
						key={data.id}
						data={data}
						color={badges[id]}
					/>
				))}
			</div>
		);
	}
}

/*
  - get all users and their data to pass to Leaderboard Card Component
   - Object.values not keys?
   - Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked
 */
const mapStateToProps = ({ users }) => {
	const leaderboardData = Object.values(users)
		.map((user) => ({
			id: user.id,
			name: user.name,
			avatarURL: user.avatarURL,
			answerCount: Object.keys(user.answers).length,
			questionCount: user.questions.length,
			totalScore: Object.keys(user.answers).length + user.questions.length
		}))
		.sort((a, b) => b.totalScore - a.totalScore);

	return {
		leaderboardData
	};
};

export default connect(mapStateToProps)(Leaderboard);
