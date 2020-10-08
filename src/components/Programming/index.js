import React, { useState, useEffect } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { getGenAPI } from '../../utilities/handleAPI';
import Timeline from './Timeline';


const useStyles = makeStyles((theme) => ({
    surface: {
        backgroundColor: theme.palette.primary.dark,
        // paddingLeft: 'calc((100% - 1170px) / 2)',
        // paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '58px',
            // paddingRight: 'calc(2.5%)',
        },
        minHeight: '100vh'
    },
    header: {
        color: theme.palette.primary.contrastText,
        fontSize: '5rem',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 'calc(58px + 2.5%)',
        },
        paddingBottom: '2rem'
    }
}))

const Programming = _ => {

    const classes = useStyles();
    const [repoList, setRepoList] = useState([])

    useEffect(() => {
        if (repoList.length === 0) {
            getGenAPI().then(repos => setRepoList(repos))
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <section className={classes.surface}>
                <h1 className={classes.header}>My Programming Timeline</h1>
                <Timeline repoList={repoList}></Timeline>
            </section>
        </ThemeProvider>
    )
}

export default Programming;