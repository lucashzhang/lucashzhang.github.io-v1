import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Paper } from '@material-ui/core';
import Icon from '../../assets/NeonLogo.svg'
import './circles.css'

const useStyles = makeStyles((theme) => ({
    surface: {
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '2.5%',
            paddingRight: '2.5%',
            height: '48rem'
        },
        [theme.breakpoints.down('xs')]: {
            height: '100vh'
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
            marginTop: '56px',
        },
    },
    logo: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    name: {
        width: 'calc(100% - 30rem)',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            width: '100%'
            // marginTop: '20vh'
        },
    },
    english: {
        color: 'white',
        fontSize: '6rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
            // marginTop: '20vh'
        },
    },
    chinese: {
        color: 'white',
        fontSize: '4rem',
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
    pink: {
        color: '#FF00FF'
    },
    cyan: {
        color: '#00FFFF'
    }
}));

const Circles = _ => {

    return (
        <div className="circles" id="circles">
            <div className="circle"></div>
            <img className='circle-icon' src={Icon} alt='' />
        </div>
    )
}

const Name = _ => {

    const classes = useStyles();

    return (
        <div className={classes.name}>
            <h1 className={classes.english}>Lucas Zhang</h1>
            <h2 className={`${classes.chinese}`}>
                <span>{'<'}</span>
                张光华
                <span>{'/>'}</span>
            </h2>
        </div>
    )
}

const Home = _ => {

    const classes = useStyles();

    return (
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
    )
}

export default Home;