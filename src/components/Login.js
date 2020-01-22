/*
Login Component (Container):
 - display all users - user can impersonate/log in as an existing user
 - set authedUser 
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "./../actions/authedUser";
import { PropTypes } from "prop-types";

class Login extends Component {
	static propTypes = {
		users: PropTypes.object.isRequired
	};

	state = {
		userId: ""
	};

	handleChange = (e) => {
		this.setState({ userId: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(setAuthedUser(this.state.userId));
	};

	render() {
		const { users } = this.props;

		const disabled =

				this.state.userId === "" ? true :
				false;

		return (
			<div className="my-container">
				<div className="card text-center">
					<div className="card-header">
						<h2>Welcome to the Would You Rather App!</h2>
						<p>Please sign in to continue</p>
					</div>
					<div className="card-body">
						<img
							className="card-img-top big"
							src="/images/all.png"
							alt=""
						/>
						<h1 className="card-title text-success font-wieght-bold">
							Sign In
						</h1>
						<div className="my-container">
							<form onSubmit={this.handleSubmit}>
								<select
									className="form-control form-control-lg"
									onChange={this.handleChange}>
									<option>Select a Friend</option>
									{Object.values(users).map((user) => (
										<option key={user.id} value={user.id}>
											{user.id}
										</option>
									))}
								</select>
								<button
									className="btn btn-success btn-block mt-5"
									disabled={disabled}>
									Sign In
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/*
- get users 
*/
function mapStateToProps({ users }) {
	return {
		users
	};
}
export default connect(mapStateToProps)(Login);
