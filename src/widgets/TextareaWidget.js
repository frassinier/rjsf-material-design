import React, {PropTypes} from 'react';

import BaseInput from './BaseInput';

function TextareaWidget({
    schema,
    id,
    label,
    placeholder,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange
}) {
    return (
        <BaseInput
            id={id}
            value={typeof value === 'undefined' ? '' : value}
            floatingLabelText={label}
            placeholder={placeholder}
            multiLine={true}
            required={required}
            disabled={disabled}
            readonly={readonly}
            autofocus={autofocus}
            onChange={onChange}
        />
    );
}

TextareaWidget.defaultProps = {
    autofocus: false
};

if (process.env.NODE_ENV !== 'production') {
    TextareaWidget.propTypes = {
        schema: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        required: PropTypes.bool,
        autofocus: PropTypes.bool,
        onChange: PropTypes.func,
    };
}

export default TextareaWidget;
