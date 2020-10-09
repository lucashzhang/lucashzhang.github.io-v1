import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';

import VizSensor from 'react-visibility-sensor';
import {Redirect} from 'react-router-dom';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    divider: {
        height: '6rem',
        backgroundColor: theme.palette.primary.dark
    }

}))

const Main = _ => {

    const [visible, setVisible] = useState('/#home');
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Redirect to={visible}/>
            <VizSensor partialVisibility minTopValue = {750} onChange={(isVisible) => {if (isVisible) setVisible('/#home')}}><Home/></VizSensor>
            <section className={classes.divider}></section>
            <VizSensor partialVisibility minTopValue = {750} onChange={(isVisible) => {if (isVisible) setVisible('/#about')}}><About/></VizSensor>
            <section className={classes.divider}></section>
            <VizSensor partialVisibility minTopValue = {750} onChange={(isVisible) => {if (isVisible) setVisible('/#contact')}}><Contact/></VizSensor>
        </ThemeProvider>
    )
}

export default Main;