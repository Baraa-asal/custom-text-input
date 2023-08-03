## TextField

A component for custom text input with additional features

## Usage

```
import React from 'react';
import { View } from 'react-native';
import TextField from './TextField';

const MyComponent = () => {
  return (
    <View>
      <TextField
        title="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={handleChange}
        error={errors.username}
        caption="Enter your username to login"
        startIcon={<YourStartIconComponent />}
      />
    </View>
  );
};

export default MyComponent;
```

## Props

|   Props   | Default  |       Type        |                              Description                              |
| :-------: | :------: | :---------------: | :-------------------------------------------------------------------: |
|   title   | `string` |     `string`      |                     The title of the input field.                     |
|  caption  | `string` |     `string`      |   Optional caption or helper text to display below the input field.   |
|   error   | `string` |     `string`      | Error message to be displayed when there's an input validation error. |
| startIcon |    -     | `React.ReactNode` | An optional icon component to be displayed at the start of the input. |
| editable  |  `true`  |     `boolean`     |   An optional value that controls the input to be disabled or not.    |
|   rest    |    -     | `TextInputProps`  | Other props that can be passed to the underlying TextInput component. |

## Additional Features

- If the startIcon prop is provided, the icon will be displayed at the beginning of the input field.
- If the error prop is provided, the input field border will change color to indicate the error state, and the error message will be displayed below the input field.
- If the input field is focused, a close icon will appear at the end of the input field, allowing the user to quickly clear the input.
