import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Drawer from '../Drawer';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from '../Home';
import Programming from '../Programming';

const WebsiteFrame = _ => {

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Route component={Drawer} />
                <Switch>
                    <Route path="/programming" component={Programming} />
                    <Route path="/" component={Home}/>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
}

export default WebsiteFrame;