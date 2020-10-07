import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

import VizSensor from 'react-visibility-sensor';
import {Redirect} from 'react-router-dom';
import { Divider } from '@material-ui/core';

const Main = _ => {

    const [visible, setVisible] = useState('/#home')

    return (
        <ThemeProvider theme={theme}>
            <Redirect to={visible}/>
            <VizSensor partialVisibility minTopValue = {500} onChange={(isVisible) => {if (isVisible) setVisible('/#home')}}><Home/></VizSensor>
            <Divider></Divider>
            <VizSensor partialVisibility minTopValue = {500} onChange={(isVisible) => {if (isVisible) setVisible('/#about')}}><About/></VizSensor>
            <Divider></Divider>
            <VizSensor partialVisibility minTopValue = {500} onChange={(isVisible) => {if (isVisible) setVisible('/#contact')}}><Contact/></VizSensor>
        </ThemeProvider>
    )
}

export default Main;