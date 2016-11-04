import React, {PropTypes} from 'react';

import BaseInput from './BaseInput';

const PasswordWidget = (props) => <BaseInput type="password" {...props}/>;

if (process.env.NODE_ENV !== "production") {
    PasswordWidget.propTypes = {
        value: PropTypes.string,
    };
}

export default PasswordWidget;
