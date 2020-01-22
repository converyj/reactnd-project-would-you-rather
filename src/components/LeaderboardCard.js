/*
LeaderboardCard Component (Presentational): 
	- display user and their score on the Leaderboard 
*/

import React from "react";
import { PropTypes } from "prop-types";

const LeaderboardCard = ({ data, color }) => {
	return (
		<div className="card">
			<div className="card-body">
				<span className="rank badge" style={{ backgroundColor: color }}>
					<i className="fa fa-trophy" />
				</span>
				<div className="container">
					<div className="row">
						<div className="col-3">
							<img src={data.avatarURL} alt="User Avatar" />
						</div>
						<div className="col">
							<h3 className="card-title">{data.name}</h3>
							<table className="table">
								<tbody>
									<tr>
										<td>Answered Questions</td>
										<td>{data.answerCount}</td>
									</tr>
									<tr>
										<td>Created Questions</td>
										<td>{data.questionCount}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="col-3">
							<div
								className="card text-center"
								style={{ width: 120 }}>
								<strong className="card-header">Score</strong>
								<div className="card-body">
									<h5 className="card-title">
										{data.totalScore}
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

LeaderboardCard.propTypes = {
	data: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired
};

export default LeaderboardCard;
