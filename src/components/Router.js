/*
Router Component (Presentational): 
 - handle all the routes to components 
 - handle the Login Component if the user is not logged in 
*/

import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Login from "./Login";
import UserCard from "./UserCard";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import NoMatch from "./NoMatch";
import { PropTypes } from "prop-types";

const Router = (props) => {
	const { isLoggedIn } = props;
	return (
		<Fragment>
			{// if not logged in

				!isLoggedIn ? <Route path="/" component={Login} /> :
				<Fragment>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Route path="/questions/bad_id" component={NoMatch} />
						<Route path="/leaderboard" component={Leaderboard} />
						<Route path="/add" component={NewPoll} />
						<Route
							path="/questions/:question_id"
							component={UserCard}
						/>

						<Route component={NoMatch} />
					</Switch>
				</Fragment>}
		</Fragment>
	);
};

Router.prototype = {
	isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
