const logger = (store) => (next) => (action) => {
	// what the actions are when dispatched
	// what the new state is after
	console.log("logger");
	console.group(action.type);
	console.log("The action: ", action);
	const newState = next(action);
	console.log("The new state: ", store.getState());
	console.groupEnd();
	return newState;
};

export default logger;
