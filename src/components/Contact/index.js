import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

const useStyles = makeStyles((theme) => ({
    surface: {
        backgroundColor: theme.palette.surfaceBackground.main,
        height: '100vh'
    }
}))

const Home = _ => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <section className = {classes.surface} id="contact">

            </section>
        </ThemeProvider>
    )
}

export default Home;