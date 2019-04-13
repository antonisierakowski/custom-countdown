import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: indigo,
        secondary: pink,
        error: red,
    },
    typography: {
        useNextVariants: true,
        fontSize: 30,
        fontFamily: [
            "'Assistant'",
            'sans-serif',
        ].join(','),
    },
})

export default theme;