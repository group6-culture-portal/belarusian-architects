import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#616161',
      main: '#373737',
      dark: '#111111',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f5f5f5',
      dark: '#c2c2c2',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Alegreya Sans',
    h1: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '700',
      fontSize: '36px'
    },
    h2: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '36px'
    },
    h3: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '34px'
    },
    h4: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '400',
      fontSize: '32px',
      fontStyle: 'italic'
    },
    button: {
      fontSize: '16px',
    },
    subtitle1: {
      fontSize: '18px',
    },
    subtitle2: {
      fontSize: '16px',
    }
  },
});

export default theme;