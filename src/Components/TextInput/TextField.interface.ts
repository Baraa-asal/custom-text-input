import {TextInputProps} from 'react-native';

export interface TextFieldProps extends TextInputProps {
  /**
   * The title or label for the text field.
   */
  title: string;

  /**
   * An optional caption or additional information for the text field.
   */
  caption?: string;

  /**
   * An error message to display below the text field in case of an error.
   */
  error?: string;

  /**
   * Icon element that appears at the start of the text field.
   * You can pass a React component to represent the icon.
   */
  startIcon?: React.ReactNode;
}
