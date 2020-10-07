import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

const Home = _ => {

    return (
        <ThemeProvider theme={theme}>
            <p>Lorem Ipsum</p>
        </ThemeProvider>
    )
}

export default Home;