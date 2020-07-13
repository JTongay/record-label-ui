import { createElement, FC } from 'react';
import { FormRenderProps } from 'react-final-form';
import { TextInput } from 'app/components/text-input';
import { FormSubmitButton } from 'app/components/form-submit-button';

export const SignUpForm: FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextInput name="first_name" label="First Name" />
      <TextInput name="last_name" label="Last Name" />
      <TextInput name="username" label="Username" />
      <TextInput name="password" label="Password" type="password" />
      <FormSubmitButton text="Sign Up" />
    </form>
  );
};
