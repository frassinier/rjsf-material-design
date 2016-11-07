import React, { PropTypes } from 'react';

import BaseInput from './BaseInput';

function fromJSONDate(jsonDate) {
	return jsonDate ? jsonDate.slice(0, 19) : "";
}

function toJSONDate(dateString) {
	if (dateString) {
		return new Date(dateString).toJSON();
	}
}

function DateTimeWidget(props) {
	const { value, onChange } = props;
	return (
		<BaseInput
			type="datetime-local"
			{...props}
			value={fromJSONDate(value)}
			onChange={(value) => onChange(toJSONDate(value))}/>
	);
}

export default DateTimeWidget;
