import { createMuiTheme } from '@material-ui/core/styles';
import {indigo, pink, red} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red,
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
    button: {
        fontFamily: [
            "'Slabo 27px''",
            'serif',
        ].join(','),
    }
})

export default theme;