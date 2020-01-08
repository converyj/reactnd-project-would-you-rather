import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveUsers } from "./../actions/users";
import { setAuthedUser } from "./../actions/authedUser";

class Login extends Component {
	state = {
		userId: ""
	};

	componentDidMount() {
		this.props.dispatch(handleReceiveUsers());
	}

	handleChange = (e) => {
		this.setState({ userId: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(setAuthedUser(this.state.userId));

		// Redirect to /
		this.props.history.push("/");
	};

	render() {
		console.log(this.props);
		const { users } = this.props;
		return (
			<div>
				<div className="card text-center">
					<div className="card-header">
						<h2>Welcome to the Would You Rather App!</h2>
						<p>Please sign in to continue</p>
					</div>
					<div className="card-body">
						<h5 className="card-title text-info">Sign In</h5>
						<div className="my-container">
							<form onSubmit={this.handleSubmit}>
								<select onChange={this.handleChange}>
									<option>Please Select</option>
									{Object.keys(users).map((user) => (
										<option key={user} value={user}>
											{users[user].name}
										</option>
									))}
								</select>
								<button className="btn">Sign In</button>
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
