import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
	render() {
		console.log(this.props);
		const { authedUser, avatar } = this.props;
		return (
			<nav>
				<ul>
					<li>Home</li>
					<li>New Question</li>
					<li>Leader Board</li>

					{authedUser !== null && (
						<Fragment>
							<li className="end">
								Hello, {authedUser} <img src={avatar} alt="" />
							</li>
							<li className="end">Logout</li>
						</Fragment>
					)}
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
