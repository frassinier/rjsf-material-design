import React, { PropTypes } from "react";

import TextField from "material-ui/TextField";

function BaseInput(props) {
	const {
		value,
		readonly,
		autofocus,
		onChange,
		options,  // eslint-disable-line
		schema,   // eslint-disable-line
		formContext,  // eslint-disable-line
		...inputProps
	} = props;
	return (
		<TextField
			{...inputProps}
			className="form-control"
			readOnly={readonly}
			autoFocus={autofocus}
			value={typeof value === "undefined" ? "" : value}
			onChange={(event) => onChange(event.target.value)}/>
	);
}

BaseInput.defaultProps = {
	type: "text",
	required: false,
	disabled: false,
	readonly: false,
	autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
	BaseInput.propTypes = {
		id: PropTypes.string.isRequired,
		placeholder: PropTypes.string,
		value: PropTypes.any,
		required: PropTypes.bool,
		disabled: PropTypes.bool,
		readonly: PropTypes.bool,
		autofocus: PropTypes.bool,
		onChange: PropTypes.func,
	};
}

export default BaseInput;
