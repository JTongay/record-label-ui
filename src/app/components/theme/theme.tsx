import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Main } from 'app/main';
import { createElement, FC } from 'react';

const AppTheme: FC<{}> = () => {
  const getTheme = () => {
    return createMuiTheme({
      palette: {
        primary: {
          main: blue[800]
        },
        secondary: {
          main: red[900]
        },
        type: 'light'
      }
    });
  };

  return (
    <MuiThemeProvider theme={getTheme()}>
      <Main />
    </MuiThemeProvider>
  );
};

export default AppTheme;
