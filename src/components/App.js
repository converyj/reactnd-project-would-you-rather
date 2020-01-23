/*
App Component (Container):
 - wrapper for all components (inside Router) 
 - get all users and questions 
*/

import React, { Component, Fragment } from "react";
import { handleInitialData } from "./../actions/shared";
import { connect } from "react-redux";
import Router from "./Router";
import { PropTypes } from "prop-types";
import { LoadingBar } from "react-redux-loading";

class App extends Component {
	static propTypes = {
		isLoggedIn: PropTypes.bool.isRequired
	};

	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Fragment>
				<div>
					<LoadingBar />
					<Router isLoggedIn={this.props.isLoggedIn} />
				</div>
			</Fragment>
		);
	}
}

/*
- set boolean whether user is logged in to pass to Router
*/
const mapStateToProps = ({ authedUser }) => {
	return {
		isLoggedIn: authedUser !== null
	};
};
export default connect(mapStateToProps)(App);
