import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
// import PollPage from "./PollPage";

const Router = () => {
	return (
		<div>
			<Route path="/login" component={Login} />
			<Route path="/" exact component={Dashboard} />
			{/* <Route path="/questions/:question_id" component={PollPage} /> */}
		</div>
	);
};

export default Router;
