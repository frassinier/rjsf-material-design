import React, {PropTypes} from 'react';

import BaseInput from './BaseInput';

const ColorWidget = (props) => <BaseInput type="color" {...props}/>;

if (process.env.NODE_ENV !== 'production') {
    ColorWidget.propTypes = {
        value: PropTypes.string,
    };
}

export default ColorWidget;
