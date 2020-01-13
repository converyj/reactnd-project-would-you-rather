import React, { Component, Fragment } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import DashBoard from "./Dashboard";
// import Routes from "./Router";
import { handleInitialData } from "./../actions/shared";
import { connect } from "react-redux";
import { setAuthedUser } from "./../actions/authedUser";
import Router from "./Router";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Fragment>
				<div className="my-container">
					<Navbar />
					<Router notLoggedIn={this.props.notLoggedIn} />
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authedUser }) => {
	return {
		notLoggedIn: authedUser === null
	};
};
export default connect(mapStateToProps)(App);
