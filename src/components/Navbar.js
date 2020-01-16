import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		console.log(this.props);
		const { authedUser, avatar } = this.props;
		return (
			<nav>
				<ul className="d-flex justify-content-between">
					<div className="d-flex justify-content-between">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/add">New Question</NavLink>
						<NavLink to="leaderboard">Leader Board</NavLink>
					</div>
					<div>
						{authedUser !== null && (
							<Fragment>
								<span>
									Hello, {authedUser}{" "}
									<img src={avatar} alt="" />
								</span>
								<span>
									<Link to="/logout" />
									<button>Logout</button>
								</span>
							</Fragment>
						)}
					</div>
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ authedUser, users }) => {
	const avatar = users[authedUser];

	return {
		authedUser,
		avatar
	};
};

export default connect(mapStateToProps)(Navbar);
