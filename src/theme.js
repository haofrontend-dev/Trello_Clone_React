import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { teal } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHieght: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal
      },
    },
    dark: {
      palette: {
        primary: teal
      },
    },
  },
  // ...other properties
});

export default theme;