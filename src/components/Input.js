import React from "react";
import Display from "./Display";
import { connect } from "react-redux";

const Input = (props) => {
	return (
		<div>
			Enter anything:
			<input
				type="text"
				value={props.inputValue}
				onChange={props.inputChanged}
			/>
			<Display value={props.inputValue} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		inputChanged: (ev) => {
			console.log("changed", ev.target.value);
			const action = { type: "INPUT_CHANGE", text: ev.target.value };
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(Input);
