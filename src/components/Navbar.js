import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Navbar extends Component {
	handleLogout = (e) => {
		e.preventDefault();
		this.props.dispatch(setAuthedUser(null));

		this.props.history.push("/");
	};

	render() {
		console.log(this.props);
		const { user } = this.props;
		return (
			<nav>
				<ul className="d-flex justify-content-between">
					<div>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/add">New Question</NavLink>
						<NavLink to="leaderboard">Leader Board</NavLink>
					</div>
					<div>
						<Fragment>
							<span>
								<img
									className="small p-1"
									src={user.avatarURL}
									alt=""
								/>
								Hello, {user.id}{" "}
							</span>
							<span>
								<button
									onClick={this.handleLogout}
									className="btn btn-secondary">
									Logout
									<span className="p-2">
										<i className="fa fa-sign-out" />
									</span>
								</button>
							</span>
						</Fragment>
					</div>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ users, authedUser }) => {
	const user = users[authedUser];

	return {
		user
	};
};

export default withRouter(connect(mapStateToProps)(Navbar));
