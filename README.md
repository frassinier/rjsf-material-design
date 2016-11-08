# rjsf-material-design

Material-UI widget set on top of react-jsonschema-form (RJSF).

## Widgets

* [Checkbox](#checkbox)
* [Radio](#radio)
* [Toggle](#toggle)
* [Text Field](#textfield)
* [Select Field](#selectfield)

### Checkbox

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "checkboxInputName": { "type": "boolean" }
        }
    }
}
```

### Radio

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "radioInputName": { "type": "boolean" }
        }
    },
    "uiSchema": {
        "radioInputName": {
            "ui:widget": "radio"
        }
    }
}
```

### Toggle

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "toggleInputName": { "type": "boolean" }
        }
    },
    "uiSchema": {
        "toggleInputName": {
            "ui:widget": "toggle"
        }
    }
}
```

### TextField

#### Default

Default widget is `<input type=["text"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    }
}
```

#### Number

Widget is `<input type=["number"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "integer" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "updown"
        }
    }
}
```

#### Color

Default widget is `<input type=["color"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "color"
        }
    }
}
```

#### Email

Default widget is `<input type=["email"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "email"
        }
    }
}
```

#### Password

Widget is `<input type=["password"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "password"
        }
    }
}
```

#### URL

Widget is `<input type=["url"]>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "url"
        }
    }
}
```

#### Textara

Widget is `<textarea></textarea>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "inputName": { "type": "string" }
        }
    },
    "uiSchema": {
        "inputName": {
            "ui:widget": "textarea"
        }
    }
}
```

## SelectField

Widget looks like `<select></select>`

```json
{
    "schema": {
        "type": "object",
        "properties": {
            "selectName": {
                "type": "string",
                "enum": ["foo", "bar"],
                "enumNames": ["Foo", "Bar"],
            }
        }
    },
    "uiSchema": {
        "selectName": {
            "ui:widget": "select"
        }
    }
}
```
