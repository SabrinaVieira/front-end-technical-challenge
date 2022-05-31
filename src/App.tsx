import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './muiTheme';
import PageLayout from './components/PageLayout';


function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <PageLayout />
    </ThemeProvider>
  );
}

export default App;
