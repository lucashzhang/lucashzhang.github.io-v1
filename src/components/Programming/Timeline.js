import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid, Fab } from '@material-ui/core';
import WebpageSnap from './WebpageSnap';
import { FaGithub, FaLink } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    buttons: {
        fontSize: '2rem',
        boxShadow: 'None'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem'
    },
    timelineContent: {
        height: 'calc(100% - 56px)',
        marginBottom: '1rem'
    },
    timelineBody: {
        marginBottom: '1rem'
    }
}))

const Timeline = props => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <VerticalTimeline layout={'1-column'}>
                {props.repoList.map(repo => (
                    <VerticalTimelineElement
                        contentStyle={{ background: '#fffff', color: '#757575' }}
                        date={`Created: ${repo.created}`}
                        dateClassName="timeline-date"
                        key={repo.id}
                    >
                        <Grid container spacing={3} className={classes.timelineBody}>
                            <Grid item md={6}>
                                <WebpageSnap url={repo.homepage}></WebpageSnap>
                            </Grid>
                            <Grid item md={6} >
                                <div className={classes.timelineContent}>
                                    <h3>{repo.name}</h3>
                                    <h4>Primary Language: {repo.language}</h4>
                                    <p>{repo.description}</p>
                                </div>
                                <Grid container>
                                    <Grid item xs={6} className={classes.buttonContainer}><Fab className={classes.buttons} color="secondary"><FaLink /></Fab></Grid>
                                    <Grid item xs={6} className={classes.buttonContainer}><Fab className={classes.buttons} color="secondary"><FaGithub /></Fab></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </ThemeProvider>
    )
}

export default Timeline;