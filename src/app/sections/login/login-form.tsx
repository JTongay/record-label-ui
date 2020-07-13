import { createElement, FC, Fragment } from 'react';
import { TextInput } from 'app/components/text-input';
import { FormSubmitButton } from 'app/components/form-submit-button';
import { FormRenderProps } from 'react-final-form';
import { FormSubmitSuccess } from 'app/components/form-submit-success';
import { Redirect } from 'react-router-dom';

export const LoginForm: FC<FormRenderProps> = ({ handleSubmit }) => {
  return (
    <Fragment>
      <FormSubmitSuccess>
        <Redirect to="/" />
      </FormSubmitSuccess>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput name="username" label="Username" />
        <TextInput name="password" label="Password" type="password" />
        <FormSubmitButton text="Log In" />
      </form>
    </Fragment>
  );
};
