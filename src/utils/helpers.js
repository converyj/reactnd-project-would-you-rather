export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString("en-US");
	return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

// styles for options
export const styles = {
	primary: {
		color: "green",
		bgColor: "honeydew"
	},
	secondary: {
		color: "grey",
		bgColor: "#f4f4f4"
	}
};

// styles for buttons
export const btnColors = {
	primary: {
		color: "btn-success"
	},
	secondary: {
		color: "btn-primary"
	}
};
