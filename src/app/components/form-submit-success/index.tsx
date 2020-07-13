import { createElement, FC } from 'react';
import { FormSpy } from 'react-final-form';

export const FormSubmitSuccess: FC = ({ children }) => (
  <FormSpy subscription={{ submitSucceeded: true }}>
    {({ submitSucceeded }) => (submitSucceeded ? children : null)}
  </FormSpy>
);
