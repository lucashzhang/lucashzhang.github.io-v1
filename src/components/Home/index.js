import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Paper } from '@material-ui/core'
import logoHorz from '../../assets/Logo20.png';
import logoVert from '../../assets/Logo20_vert.png';

const useStyles = makeStyles((theme) => ({
    surface: {
        height: '100vh',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 'calc(58px + 2.5%)',
            paddingRight: 'calc(2.5%)',
        },
    },
    center: {
        paddingTop: '5%',
        paddingBottom: '5%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    logoHorz: {
        objectFit: 'fit',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    logoVert: {
        objectFit: 'fit',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    welcome: {
        width: '90%',
        padding: '1.5rem',
        margin: 'auto',
    },
}))

const Home = _ => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id='home'>
                <div className={classes.center}>
                    <img className={classes.logoHorz} src={logoHorz} alt='' />
                    <img className={classes.logoVert} src={logoVert} alt='' />
                    <Paper elevation={0} className={classes.welcome}>
                        <p>Welcome to my website! Think of this webpage as a portfolio of sorts. You can find all sorts of things about me here. Additionally, it should be all up to date thanks to the Github API!</p>
                    </Paper>
                </div>
            </section>
        </ThemeProvider>
    )
}

export default Home;