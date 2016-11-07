import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

function BaseInput(props) {
	const {
		id,
		type,
		placeholder,
		value,
		required,
		disabled,
		readonly,
		autofocus,
		onChange,
		label,
	} = props;
	return (
		<TextField
			id={id}
			type={type}
			placeholder={placeholder}
			required={required}
			disabled={disabled}
			floatingLabelText={label}
            readonly={readonly}
            autofocus={autofocus}
			value={typeof value === "undefined" ? "" : value}
			onChange={(event, value) => onChange(value)}
		/>
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
