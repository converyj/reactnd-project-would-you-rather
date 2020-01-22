/*
Navbar Component (Container):
  - build navbar items 
  - handle logout 
*/
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { PropTypes } from "prop-types";

class Navbar extends Component {
	static propTypes = {
		user: PropTypes.object.isRequired
	};

	// reset the authedUser to null and redirect to Login Component
	handleLogout = (e) => {
		e.preventDefault();
		this.props.dispatch(setAuthedUser(null));

		this.props.history.push("/");
	};

	render() {
		const { user } = this.props;
		return (
			<nav>
				<ul className="d-flex justify-content-between align-items-center">
					<div>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/add">New Question</NavLink>
						<NavLink to="/leaderboard">Leader Board</NavLink>
					</div>
					<div>
						<Fragment>
							<span>
								<img
									className="avatar p-1"
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

/*
  - get authedUser to display on navbar 
*/
const mapStateToProps = ({ users, authedUser }) => {
	const user = users[authedUser];

	return {
		user
	};
};

export default withRouter(connect(mapStateToProps)(Navbar));
