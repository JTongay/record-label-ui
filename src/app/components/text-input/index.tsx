import { createElement, FC } from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';

interface TextInputProps {
  // Label text
  label: string;
  // Name of the input
  name: string;

  // Helper text to be displayed on the bottom
  helperText?: string;
  // Max length of the input
  maxLength?: string;
  // required, default to true
  required?: boolean;
  // The type of input (ex: password, number, etc.), default to text
  type?: string;
  // Assign an id to the input
  id?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  type = 'text',
  id,
  required = true,
  name,
  helperText,
}) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          error={!!meta.invalid && !!meta.touched}
          label={label}
          id={id}
          type={type}
          color="primary"
          required={required}
          helperText={meta.error || helperText}
          {...input}
        />
      )}
    </Field>
  );
};
