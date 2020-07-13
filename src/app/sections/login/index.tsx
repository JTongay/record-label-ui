import { createElement, FC, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { Form } from 'react-final-form';
import { LoginForm } from './login-form';

const Login: FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Typography variant="h1">Login Page</Typography>
      <Form onSubmit={handleSubmit} component={LoginForm} />
    </Fragment>
  );
};

export default Login;
