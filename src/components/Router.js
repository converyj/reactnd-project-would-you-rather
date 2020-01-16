import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Login from "./Login";
import UserCard from "./UserCard";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import NoMatch from "./NoMatch";

const Router = (props) => {
	console.log(props);
	const { notLoggedIn } = props;
	return (
		<Fragment>
			{
				props.notLoggedIn ? <Route path="/" exact component={Login} /> :
				<Fragment>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Route
							path="/leaderboard"
							exact
							component={Leaderboard}
						/>
						<Route path="/add" exact component={NewPoll} />
						<Route
							exact
							path="/questions/:question_id"
							component={UserCard}
						/>
						{/* <Route exact path='/logout' component={Logout} /> */}
						<Route path="/questions/bad_id" component={NoMatch} />
						<Route component={NoMatch} />
					</Switch>
				</Fragment>}
		</Fragment>
	);
};

export default Router;
