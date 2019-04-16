import { createMuiTheme } from '@material-ui/core/styles';
import {indigo, teal, red} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        secondary: indigo,
        error: red,
    },
    typography: {
        useNextVariants: true,
        fontSize: 30,
        fontFamily: [
            "'Slabo 27px''",
            'serif',
        ].join(','),
    },
    overrides: {
        MuiButton: {
            text: {
                color: 'red',
                fontFamily: [
                    "'Slabo 27px''",
                    'serif',
                ].join(','),
            }

        }
        
    }


})

export default theme;