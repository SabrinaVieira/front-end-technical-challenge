import { createTheme } from '@mui/material/styles';
  
 
  export const muiTheme = createTheme(
    {
      palette: {
        common: {
          black: "#000",
          white: "#fff",
        },
        background: {
          paper: "#fff",
          default: "#bfe0ff",
        },
        primary: {
        main: "#131350",
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