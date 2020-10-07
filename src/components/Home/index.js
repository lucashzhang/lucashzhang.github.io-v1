import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Main from '../Main';
import About from '../About';
import Contact from '../Contact';

import VizSensor from 'react-visibility-sensor';
import {Redirect} from 'react-router-dom';

const Home = _ => {

    const [visible, setVisible] = useState('/#home')

    return (
        <ThemeProvider theme={theme}>
            <Redirect to={visible}/>
            <VizSensor partialVisibility onChange={(isVisible) => {if (isVisible) setVisible('/#home')}}><Main/></VizSensor>
            <VizSensor partialVisibility onChange={(isVisible) => {if (isVisible) setVisible('/#about')}}><About/></VizSensor>
            <VizSensor partialVisibility onChange={(isVisible) => {if (isVisible) setVisible('/#contact')}}><Contact/></VizSensor>
        </ThemeProvider>
    )
}

export default Home;