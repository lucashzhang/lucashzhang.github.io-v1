import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

const useStyles = makeStyles((theme) => ({
    surface: {
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        paddingBottom: '3rem',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 'calc(58px + 2.5%)',
            paddingRight: 'calc(2.5%)',
        },
    },
    header: {
        color: theme.palette.primary.contrastText,
        fontSize: '5rem',
        marginBottom: '1rem',
        paddingTop: '6rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
    },
}))

const Home = _ => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id="contact">
                <h1 className={classes.header}>Contact Me</h1>

            </section>
        </ThemeProvider>
    )
}

export default Home;