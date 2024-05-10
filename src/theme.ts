import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#38598b',
    },
    secondary: {
      main: '#9fd3c7',
    },
  },
  typography: {
    fontFamily: "Arial"
  }
});

theme = responsiveFontSizes(theme);

export default theme;