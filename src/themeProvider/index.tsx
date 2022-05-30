import { createTheme } from '@mui/material/styles';
  
 
  export const muiTheme = createTheme(
    {
      palette: {
        common: {
          black: "#000",
          white: "#fff",
        },
        background: {
          paper: "#bfe0ff",
          default: "#fff",
        },
        primary: {
        main: "#6c6c6c",
        },
        secondary: {
          main: "#adcb6c",
          contrastText: "#fff",
        },
        error: {
          light: "#e57373",
          main: "#f44336",
          dark: "#d32f2f",
          contrastText: "#fff",
        },
      },
      typography: {
        fontFamily: ["Montserrat", "Roboto"].join(",")
      },
    },
  );