import React, {PropTypes} from 'react';

import BaseInput from './BaseInput';

const URLWidget = (props) => <BaseInput type="url" {...props}/>;

if (process.env.NODE_ENV !== 'production') {
    URLWidget.propTypes = {
        value: PropTypes.string,
    };
}

export default URLWidget;
