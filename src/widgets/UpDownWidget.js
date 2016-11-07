import React, {PropTypes} from 'react';

import {rangeSpec} from 'react-jsonschema-form/lib/utils';

import BaseInput from './BaseInput';

const UpDownWidget = (props) => <BaseInput type="number" {...props} {...rangeSpec(props.schema)}/>;

export default UpDownWidget;
