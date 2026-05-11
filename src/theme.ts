import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: { main: '#232323', contrastText: '#ffffff'},
        secondary: { main: '#4f8e3e', contrastText: '#000000ff' },
    },
    typography: {
        fontFamily: "Segoe UI",
    },
});

theme = responsiveFontSizes(theme);

export default theme;
