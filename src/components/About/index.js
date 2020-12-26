import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Grid, Paper, List, ListItem, Divider } from '@material-ui/core';
import Headshot from '../../assets/Headshot.jpg';

const useStyles = makeStyles((theme) => ({
    surface: {
        backgroundColor: theme.palette.surfaceBackground.main,
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
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
            paddingTop: 56,
        },
    },
    runDown: {
        color: theme.palette.primary.contrastText,
        marginBottom: '3rem'
    },
    imgContainer: {
        padding: '1rem'
    },
    headshot: {
        width: '100%',
        borderRadius: '0.25rem',
    },
    aboutContent: {
        display: 'flex',
        alignItems: 'center'
    },
    aboutList: {
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.up('md')]: {
            paddingLeft: '4rem'
        },
    },
    aboutDivider: {
        backgroundColor: theme.palette.primary.contrastText,
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
    },
    aboutHeader: {
        marginBottom: '1rem'
    },
    emphasis: {
        color: theme.palette.secondary.main
    }
}))

const About = _ => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface} id="about">
                <h1 className={classes.header}>About Me</h1>
                <div className={classes.runDown}>
                    <p>
                        Hello! My name is Lucas Zhang. I'm a creative and analytical software developer who also happens to love making things look pretty.
                    </p>
                </div>
                <Grid container margin={6}>
                    <Grid item md={6}>
                        <Paper className={classes.imgContainer}>
                            <img src={Headshot} alt="A portrait of me" className={classes.headshot}></img>
                        </Paper>
                    </Grid>
                    <Grid item md={6} className={classes.aboutContent}>
                        <List className={classes.aboutList}>
                            <Divider className={classes.aboutDivider}></Divider>
                            <ListItem>
                                <div>
                                    <h3 className={classes.aboutHeader}>College</h3>
                                    <p>
                                        I'm a Computer Science Major with a Minor in Statistics at the University of North Carolina at Chapel Hill.
                                    </p>
                                </div>
                            </ListItem>
                            <Divider className={classes.aboutDivider}></Divider>
                            <ListItem>
                                <div>
                                    <h3 className={classes.aboutHeader}>Interests</h3>
                                    <p>
                                        I'm a very big fan of Digital Media. 
                                        Whether it be videos, graphics, games, or even audio, I love learning about different mediums of communicating with people.
                                        As a programmer, I really like web development and I'm particularly interested in the tools people use to create new media.
                                    </p>
                                </div>
                            </ListItem>
                            <Divider className={classes.aboutDivider}></Divider>
                            <ListItem>
                                <div>
                                    <h3 className={classes.aboutHeader}>Activities</h3>
                                    <p>
                                        Right now, I'm active in a few clubs.
                                        The first of which is <a className={classes.emphasis} href='https://carolinadata.unc.edu/' target='carolinadata'>Carolina Analytics and Data Science</a>. 
                                        As a Design Chair of the club, I'm responsible for the designs and branding for the club. 
                                        I often help design graphics for Facebook Events, Instagram Stories, as well as general graphics for the club.
                                        I also help out a group of friends and design for the <a className={classes.emphasis} href='https://cdcunc.com/' target='cdcunc'>Carolina Data Challenge</a> hackathon in the fall.
                                        Another Club I'm active in is <a className={classes.emphasis} href='https://www.facebook.com/cssguncch/' target='cssg'>Computer Science for Social Good</a>.
                                        As a member of the tech team working on a project for the Carolina for the Kids non-profit, I'm currently helping to create a new web application to help with their canning routes
                                    </p>
                                </div>
                            </ListItem>
                            <Divider className={classes.aboutDivider}></Divider>
                        </List>
                    </Grid>
                </Grid>
            </section>
        </ThemeProvider>
    )
}

export default About;