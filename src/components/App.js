import React, { Component } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import DashBoard from "./Dashboard";
import Router from "./Router";
import { handleInitialData } from "./../actions/shared";
import { connect } from "react-redux";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<div className="my-container">
				<Navbar />
				<Router />
			</div>
		);
	}
}

export default connect()(App);
