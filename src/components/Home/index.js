import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Paper } from '@material-ui/core';
import Icon from '../../assets/Logo20_icon.png'
import './circles.css'

const useStyles = makeStyles((theme) => ({
    surface: {
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '2.5%',
            paddingRight: '2.5%',
        },
    },
    center: {
        paddingTop: '5%',
        paddingBottom: '5%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
            marginTop: 56,
        },
    },
    logo: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    name: {
        marginLeft: '50px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
            // marginTop: '20vh'
        },
    },
    english: {
        color: 'white',
        fontSize: '13vh',
        fontWeight: '100',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        },
    },
    chinese: {
        color: 'white',
        fontSize: '5vh',
        fontWeight: '100',
        marginBottom: '6vh',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        },
    },
    welcome: {
        width: '80%',
        padding: '1.5rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
}));

const Circles = _ => {

    return (
        <div class="circles" id="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <img className='circle-icon' src={Icon} alt='' />
        </div>
    )
}

const Name = _ => {

    const classes = useStyles();

    return (
        <div className={classes.name}>
            <h1 className={classes.english}>Lucas Zhang</h1>
            <h2 className={classes.chinese}>{'<张光华/>'}</h2>
        </div>
    )
}

const Home = _ => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id='home'>
                <div className={classes.center}>
                    <div className={classes.logo}>
                        <Circles></Circles>
                        <Name></Name>
                    </div>
                    {/* <img className={classes.logoVert} src={logoVert} alt='' /> */}
                    <Paper elevation={0} className={classes.welcome}>
                        <p>Welcome to my website! Think of this webpage as a portfolio of sorts. You can find all sorts of things about me here. Additionally, it should all be up to date thanks to the Github API!</p>
                    </Paper>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default Home;