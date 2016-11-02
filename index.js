import MaterialDesignCheckboxWidget from "./widgets/CheckboxWidget";
import MaterialDesignRadioWidget from "./widgets/RadioWidget";
import MaterialDesignSelectWidget from "./widgets/SelectWidget";
import MaterialDesignTextWidget from "./widgets/TextWidget";
import MaterialDesignTextareaWidget from "./widgets/TextareaWidget";

const materialDesignWidgetMapping = {
	boolean: {
		default: MaterialDesignCheckboxWidget,
		alternatives: {
			radio: MaterialDesignRadioWidget,
			select: MaterialDesignSelectWidget,
		}
	},
	number: {
		default: MaterialDesignTextWidget,
		alternatives: {
			radio: MaterialDesignRadioWidget,
		}
	},
	integer: {
		default: MaterialDesignTextWidget,
		alternatives: {
			radio: MaterialDesignRadioWidget,
		}
	},
	string: {
		default: MaterialDesignTextWidget,
		alternatives: {
			textarea: MaterialDesignTextareaWidget,
			select: MaterialDesignSelectWidget,
			radio: MaterialDesignRadioWidget,
		},
	},
	array: {
		default: MaterialDesignSelectWidget,
		alternatives: {
			checkboxes: MaterialDesignCheckboxWidget
		},
	}
};

export default materialDesignWidgetMapping;