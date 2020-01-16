/*
LeaderboardCard Component: 
	- display user and their score on the Leaderboard 
*/

import React from "react";

const LeaderboardCard = ({ data }) => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="container">
					<div className="row">
						<div className="col d-flex flex-grow-0">
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
						<div className="col">
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

export default LeaderboardCard;
