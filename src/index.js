import React from 'react';

import Form from 'react-jsonschema-form';

import MaterialDesignFieldTemplate from './templates/FieldTemplate';
import MaterialDesignCheckboxWidget from './widgets/CheckboxWidget';
import MaterialDesignColorWidget from './widgets/ColorWidget';
import MaterialDesignEmailWidget from './widgets/EmailWidget';
import MaterialDesignPasswordWidget from './widgets/PasswordWidget';
import MaterialDesignRadioWidget from './widgets/RadioWidget';
import MaterialDesignSelectWidget from './widgets/SelectWidget';
import MaterialDesignTextareaWidget from './widgets/TextareaWidget';
import MaterialDesignTextWidget from './widgets/TextWidget';
import MaterialDesignUpDownWidget from './widgets/UpDownWidget';
import MaterialDesignURLWidget from './widgets/URLWidget';

const materialDesignTheme = {
    widgets: {
        CheckboxWidget: MaterialDesignCheckboxWidget,
        ColorWidget: MaterialDesignColorWidget,
        EmailWidget: MaterialDesignEmailWidget,
        PasswordWidget: MaterialDesignPasswordWidget,
        RadioWidget: MaterialDesignRadioWidget,
        SelectWidget: MaterialDesignSelectWidget,
        TextareaWidget: MaterialDesignTextareaWidget,
        TextWidget: MaterialDesignTextWidget,
        UpDownWidget: MaterialDesignUpDownWidget,
        URLWidget: MaterialDesignURLWidget
    },
    FieldTemplate: MaterialDesignFieldTemplate,
};

const MaterialDesignForm = (props) => (
    <Form
        {...materialDesignTheme}
        {...props}
    />
);

export default MaterialDesignForm;
