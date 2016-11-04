import React, { PropTypes } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

function asNumber(value) {
	if (/\.$/.test(value)) {
		// "3." can't really be considered a number even if it parses in js. The
		// user is most likely entering a float.
		return value;
	}
	if (/\.0$/.test(value)) {
		// we need to return this as a string here, to allow for input like 3.07
		return value;
	}
	const n = Number(value);
	const valid = typeof n === "number" && !Number.isNaN(n);

	if (/\.\d*0$/.test(value)) {
		// It's a number, that's cool - but we need it as a string so it doesn't screw
		// with the user when entering dollar amounts or other values (such as those with
		// specific precision or number of significant digits)
		return value;
	}

	return valid ? n : value;
}

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue({ type, items }, value) {
	if (type === "array" && items && ["number", "integer"].includes(items.type)) {
		return value.map(asNumber);
	} else if (type === "boolean") {
		return value === "true";
	} else if (type === "number") {
		return asNumber(value);
	}
	return value;
}

function SelectWidget({
	schema,
	id,
	options,
	value,
	label,
	required,
	disabled,
	readonly,
	multiple,
	autofocus,
	onChange
}) {
	const { enumOptions } = options;
	return (
		<SelectField
			id={id}
			multiple={multiple}
			floatingLabelText={label}
			value={value}
			required={required}
			disabled={disabled}
			readOnly={readonly}
			autoFocus={autofocus}
			onChange={(event) => {
				let newValue;
				if (multiple) {
					newValue = [].filter.call(
						event.target.options, o => o.selected).map(o => o.value);
				} else {
					newValue = event.target.value;
				}
				onChange(processValue(schema, newValue));
			}}>{
			enumOptions.map(({ value, label }, i) => {
				return <MenuItem key={i} value={value} primaryText={label}/>;
			})
		}</SelectField>
	);
}

SelectWidget.defaultProps = {
	autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
	SelectWidget.propTypes = {
		schema: PropTypes.object.isRequired,
		id: PropTypes.string.isRequired,
		options: PropTypes.shape({
			enumOptions: PropTypes.array,
		}).isRequired,
		value: PropTypes.any,
		required: PropTypes.bool,
		multiple: PropTypes.bool,
		autofocus: PropTypes.bool,
		onChange: PropTypes.func,
	};
}

export default SelectWidget;
