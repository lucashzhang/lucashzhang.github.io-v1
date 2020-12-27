import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
    palette: {
        primary: {
            main: '#00DDDD'
        },
        secondary: {
            main: '#DD00DD',
        },
        surfaceBackground: {
            main: '#444444',
            contrastText: '#FFFFFF'
        }
    }
})