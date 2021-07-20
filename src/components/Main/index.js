import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Programming from '../Programming';

import VizSensor from 'react-visibility-sensor';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    divider: {
        height: '6rem',
        backgroundColor: theme.palette.surfaceBackground.main,
    },

}))

const Main = _ => {

    const history = useHistory()
    const classes = useStyles();

    return (
        <>
            <VizSensor partialVisibility offset={{ top: window.innerHeight / 3, bottom: window.innerHeight / 3 }} onChange={(isVisible) => { if (isVisible) history.push('/#home') }}><Home /></VizSensor>
            <section className={classes.divider}></section>
            <VizSensor partialVisibility offset={{ top: window.innerHeight / 3, bottom: window.innerHeight / 3 }} onChange={(isVisible) => { if (isVisible) history.push('/#about') }}><About /></VizSensor>
            <section className={classes.divider}></section>
            <VizSensor partialVisibility offset={{ top: window.innerHeight / 3, bottom: window.innerHeight / 3 }} onChange={(isVisible) => { if (isVisible) history.push('/#programmming') }}><Programming /></VizSensor>
            <section className={classes.divider}></section>
            <VizSensor partialVisibility offset={{ top: window.innerHeight / 3, bottom: window.innerHeight / 3 }} onChange={(isVisible) => { if (isVisible) history.push('/#contact') }}><Contact /></VizSensor>
        </>
    )
}

export default Main;