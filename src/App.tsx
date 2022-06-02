import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './style/muiTheme';
import Page from './containers/Page';
import { StoreContextProvider } from './providers/SearchProvider';


function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <StoreContextProvider>
        <Page />
      </StoreContextProvider>
    </ThemeProvider>
  );
}

export default App;
