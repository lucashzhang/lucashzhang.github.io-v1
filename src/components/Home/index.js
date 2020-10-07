import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

const useStyles = makeStyles((theme) => ({
    surface: {
        backgroundColor: theme.palette.surfaceBackground.main,
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 'calc(6rem + 2.5%)',
            paddingRight: '2.5%',
        },
    }
}))

const Home = _ => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id='home'>
                <p>Home</p>
            </section>
        </ThemeProvider>
    )
}

export default Home;