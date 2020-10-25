import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Drawer from '../Drawer';
import MobileDrawer from '../Drawer/MobileDrawer.js';
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from '../Main';
// import Programming from '../Programming';

const useStyles = makeStyles((theme) => ({
    desktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    }
}))

const WebsiteFrame = _ => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Route className={classes.desktop} component={Drawer} />
                <Route className={classes.mobile} component={MobileDrawer} />
                <Switch>
                    {/* <Route path="/programming" component={Programming} /> */}
                    <Route path="/" component={Main}/>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
}

export default WebsiteFrame;