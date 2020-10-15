import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Fab, Tooltip } from '@material-ui/core';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    surface: {
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        paddingBottom: '3rem',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '2.5%',
            paddingRight: '2.5%',
        },
    },
    header: {
        color: theme.palette.primary.contrastText,
        fontSize: '5rem',
        marginBottom: '1rem',
        paddingTop: '6rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            height: '70%',
        },
    },
    button: {
        width: '7rem',
        height: '7rem',
        fontSize: '4rem',
        boxShadow: 'None',
        margin: '1rem'
    }
}))

const Home = _ => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id="contact">
                <h1 className={classes.header}>Contact Me</h1>
                <div className={classes.buttonContainer}>
                    <Tooltip title="Email me"><Fab className={classes.button} href="mailto:lucas_h_zhang@hotmail.com" target="_blank"><FaEnvelope /></Fab></Tooltip>
                    <Tooltip title="Visit my Linkedin"><Fab className={classes.button} href="https://www.linkedin.com/in/lucashzhang" target="_blank"><FaLinkedin /></Fab></Tooltip>
                    <Tooltip title="Visit my Github"><Fab className={classes.button} href="https://github.com/lucashzhang" target="_blank"><FaGithub /></Fab></Tooltip>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default Home;