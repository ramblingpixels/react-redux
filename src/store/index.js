import { createStore } from "redux";

const initalState = {
	inputValue: " ",
};

const reducer = (state = initalState, action) => {
	console.log("reducer", action);

	switch (action.type) {
		case "INPUT_CHANGE":
			return Object.assign({}, state, { inputValue: action.text });
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
