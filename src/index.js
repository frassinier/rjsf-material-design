import React from 'react';

import Form from 'react-jsonschema-form';

import MaterialDesignFieldTemplate from './templates/FieldTemplate';
import MaterialDesignCheckboxesWidget from './widgets/CheckboxesWidget';
import MaterialDesignCheckboxWidget from './widgets/CheckboxWidget';
import MaterialDesignColorWidget from './widgets/ColorWidget';
import MaterialDesignDateTimeWidget from './widgets/DateTimeWidget';
import MaterialDesignDateWidget from './widgets/DateWidget';
import MaterialDesignEmailWidget from './widgets/EmailWidget';
import MaterialDesignPasswordWidget from './widgets/PasswordWidget';
import MaterialDesignRadioWidget from './widgets/RadioWidget';
import MaterialDesignRangeWidget from './widgets/RangeWidget';
import MaterialDesignSelectWidget from './widgets/SelectWidget';
import MaterialDesignTextareaWidget from './widgets/TextareaWidget';
import MaterialDesignTextWidget from './widgets/TextWidget';
import MaterialDesignToggletWidget from './widgets/ToggleWidget';
import MaterialDesignUpDownWidget from './widgets/UpDownWidget';
import MaterialDesignURLWidget from './widgets/URLWidget';

const customWidgets = {
	toggle: MaterialDesignToggletWidget,
};

const customUiSchema = {
	'ui:widget': 'toggle',
};


const materialDesignTheme = {
    widgets: {
	    CheckboxesWidget: MaterialDesignCheckboxesWidget,
        CheckboxWidget: MaterialDesignCheckboxWidget,
	    ColorWidget: MaterialDesignColorWidget,
	    DateTimeWidget: MaterialDesignDateTimeWidget,
	    DateWidget: MaterialDesignDateWidget,
        EmailWidget: MaterialDesignEmailWidget,
        PasswordWidget: MaterialDesignPasswordWidget,
        RadioWidget: MaterialDesignRadioWidget,
        RangeWidget: MaterialDesignRangeWidget,
        SelectWidget: MaterialDesignSelectWidget,
        TextareaWidget: MaterialDesignTextareaWidget,
	    TextWidget: MaterialDesignTextWidget,
        UpDownWidget: MaterialDesignUpDownWidget,
        URLWidget: MaterialDesignURLWidget,
	    ...customWidgets
    },
    FieldTemplate: MaterialDesignFieldTemplate,
};

const MaterialDesignForm = (props) => {
	const onSubmitHandler = (...args) => {
		console.debug('submit', args[0] && args[0].formData);
		return props.onSubmit && props.onSubmit(...args);
	};
	return (
		<Form
			uiSchema={{
				...customUiSchema,
				...props.uiSchema
			}}
			{...materialDesignTheme}
			{...props}
			onSubmit={onSubmitHandler}
		/>
	);
};

export default MaterialDesignForm;
