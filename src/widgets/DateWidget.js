import React, { PropTypes } from 'react';

import BaseInput from './BaseInput';

function DateWidget(props) {
	const { onChange } = props;
	return (
		<BaseInput
			type="date"
			{...props}
			onChange={(value) => onChange(value || undefined)}/>
	);
}

export default DateWidget;
