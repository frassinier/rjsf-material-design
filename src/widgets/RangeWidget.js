import React, {PropTypes} from 'react';
import Slider from 'material-ui/Slider';

import {rangeSpec} from 'react-jsonschema-form/lib/utils';

function RangeWidget(props) {
  const {
      schema,
      id,
      name,
      value,
      required,
      disabled,
      onChange
  } = props;
  return (
      <div>
        <span>{value}</span>
        <Slider
            id={id}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            onChange={(event, value) => onChange(value)}
            {...rangeSpec(schema)}/>
      </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  RangeWidget.propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };
}

export default RangeWidget;
