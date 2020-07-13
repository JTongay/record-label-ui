import { createElement, FC } from 'react';
import { FormSpy } from 'react-final-form';
import { Button, Typography, CircularProgress } from '@material-ui/core';

interface FormSubmitButtonProps {
  text: string;
}

export const FormSubmitButton: FC<FormSubmitButtonProps> = ({ text }) => {
  return (
    <FormSpy subscription={{ valid: true, submitting: true }}>
      {({ valid, submitting }) => (
        <Button disabled={!valid || submitting}>
          {submitting ? (
            <CircularProgress size={24} />
          ) : (
            <Typography variant="body1">{text}</Typography>
          )}
        </Button>
      )}
    </FormSpy>
  );
};
