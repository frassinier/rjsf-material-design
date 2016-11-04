import React from "react";
import Toggle from "material-ui/Toggle";

function ToggleWidget({
	value,
	disabled,
	label,
	onChange
}) {
	return (
		<Toggle defaultToggled={value}
		        onToggle={(event, value) => onChange(value)}
		        disabled={disabled}
		        label={label}/>
	);
}

export default ToggleWidget;