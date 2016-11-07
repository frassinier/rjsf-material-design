import React from 'react';

import Form from 'react-jsonschema-form';

import MaterialDesignFieldTemplate from './templates/FieldTemplate';
import MaterialDesignCheckboxesWidget from './widgets/CheckboxesWidget';
import MaterialDesignCheckboxWidget from './widgets/CheckboxWidget';
import MaterialDesignColorWidget from './widgets/ColorWidget';
import MaterialDesignEmailWidget from './widgets/EmailWidget';
import MaterialDesignPasswordWidget from './widgets/PasswordWidget';
import MaterialDesignRadioWidget from './widgets/RadioWidget';
import MaterialDesignRangeWidget from './widgets/RangeWidget';
import MaterialDesignSelectWidget from './widgets/SelectWidget';
import MaterialDesignTextareaWidget from './widgets/TextareaWidget';
import MaterialDesignTextWidget from './widgets/TextWidget';
import MaterialDesignUpDownWidget from './widgets/UpDownWidget';
import MaterialDesignURLWidget from './widgets/URLWidget';

const materialDesignTheme = {
    widgets: {
	    CheckboxesWidget: MaterialDesignCheckboxesWidget,
        CheckboxWidget: MaterialDesignCheckboxWidget,
        ColorWidget: MaterialDesignColorWidget,
        EmailWidget: MaterialDesignEmailWidget,
        PasswordWidget: MaterialDesignPasswordWidget,
        RadioWidget: MaterialDesignRadioWidget,
        RangeWidget: MaterialDesignRangeWidget,
        SelectWidget: MaterialDesignSelectWidget,
        TextareaWidget: MaterialDesignTextareaWidget,
        TextWidget: MaterialDesignTextWidget,
        UpDownWidget: MaterialDesignUpDownWidget,
        URLWidget: MaterialDesignURLWidget
    },
    FieldTemplate: MaterialDesignFieldTemplate,
};

const MaterialDesignForm = (props) => {
	const onSubmitHandler = (...args) => {
		console.debug('submit', args.formData);
		return props.onSubmit(args)
	};
	return (
		<Form
			{...materialDesignTheme}
			{...props}
			onSubmit={onSubmitHandler}
		/>
	);
};

export default MaterialDesignForm;
