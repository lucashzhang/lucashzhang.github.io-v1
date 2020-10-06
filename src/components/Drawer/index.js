import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Drawer, IconButton, Tooltip, Divider } from '@material-ui/core';
import { FaHome, FaUser, FaCode, FaFile } from 'react-icons/fa';
import { Link } from "react-router-dom";

const WebsiteDrawer = _ => {

    return (
        <ThemeProvider theme={theme}>
            <Drawer anchor="left" variant="permanent">
                <Tooltip title="Home"><IconButton color="primary" component={Link} to='/'><FaHome /></IconButton></Tooltip>
                <Tooltip title="About"><IconButton color="default" component={Link} to='/about'><FaUser /></IconButton></Tooltip>
                <Tooltip title="Home"><IconButton color="default" component={Link} to='/'><FaHome /></IconButton></Tooltip>
                <Divider />
                <Tooltip title="My Programming"><IconButton color="secondary" component={Link} to='/programming'><FaCode /></IconButton></Tooltip>
                <Divider />
                <Tooltip title="My Resume"><IconButton color="default" href="https://drive.google.com/file/d/1hQGB-3WnhvWq-9YGBw5qBOTUkdB6IARd/view?usp=sharing" target="_blank"><FaFile /></IconButton></Tooltip>
            </Drawer>
        </ThemeProvider>
    )
}

export default WebsiteDrawer;