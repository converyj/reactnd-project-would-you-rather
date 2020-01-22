/*
NoMatch Component: 
 - Show error if user tries to access wrong url or poll that doesn't exist 
*/

import React from "react";

const NoMatch = () => {
	return (
		<div className="text-center p-4 my-container">
			<h5 className="font-weight-bold">404 Match Error</h5>
			<p>Sorry poll or URL does not exist. Please Try Again.</p>
		</div>
	);
};

export default NoMatch;
