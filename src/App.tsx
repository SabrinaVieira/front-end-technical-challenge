import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './style/muiTheme';
import Page from './containers/Page';


function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
}

export default App;
