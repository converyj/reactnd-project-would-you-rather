import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserCard from "./UserCard";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

const Router = (props) => {
	console.log(props);
	const { notLoggedIn } = props;
	return (
		<Switch>
			{
				props.notLoggedIn ? <Route path="/" exact component={Login} /> :
				<Fragment>
					<Route path="/" exact component={Dashboard} />
					<Route path="/leaderboard" exact component={Leaderboard} />
					<Route path="/add" exact component={NewPoll} />
					<Route
						exact
						path="/questions/:question_id"
						component={UserCard}
					/>
					{/* <Route exact path='/logout' component={Logout} /> */}
				</Fragment>}
			{/* <Route component={NotFound} /> */}
		</Switch>
	);
};

export default Router;
