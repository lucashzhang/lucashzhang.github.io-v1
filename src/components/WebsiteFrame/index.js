import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Drawer from '../Drawer';
import { HashRouter, Switch, Route } from "react-router-dom";

const WebsiteFrame = _ => {

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Route component={Drawer} />
                <Switch>
                    <Route path="/about" />
                    <Route path="/programming" />
                    <Route path="/" />
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
}

export default WebsiteFrame;