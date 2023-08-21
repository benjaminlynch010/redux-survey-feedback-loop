import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: pink,
    secondary: pink
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
