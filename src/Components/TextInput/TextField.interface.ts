import { TextInputProps } from 'react-native';

export interface TextFieldProps extends Omit<TextInputProps, "editable">  {
    title: string;
    caption?: string;
    disabled?:boolean,
    error?:string;
    startIcon?: React.ReactNode;
    value?: string;
    //onChange?:(name: string) => void;
}
