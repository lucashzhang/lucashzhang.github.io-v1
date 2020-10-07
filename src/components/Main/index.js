import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';


const Home = _ => {
    return (
        <ThemeProvider theme={theme}>
            <section style={{ height: '100vh', backgroundColor: 'blueviolet' }} id='home'>

            </section>
        </ThemeProvider>
    )
}

export default Home;