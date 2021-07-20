import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { getGenAPI } from '../../utilities/handleAPI';
import TimelineFilter from './TimelineFilter';
import Timeline from './Timeline';
import { getUniqLang, assignColors } from './TimelineUtil';
import { Paper } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    surface: {
        backgroundColor: theme.palette.surfaceBackground.main,
        minHeight: 'calc(100vh - 12rem)',
        paddingBottom: '6rem',
        paddingTop: '6rem'
    },
    header: {
        color: theme.palette.surfaceBackground.contrastText,
        fontSize: '5rem',
        paddingLeft: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            marginLeft: '2.5%',
            fontSize: '3rem'
        },
        paddingBottom: '2rem'
    },
    paper: {
        marginLeft: 'calc((100% - 1170px) / 2)',
        marginRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            marginLeft: '2.5%',
            marginRight: '2.5%',
        },
        padding: '1rem'
    },
    link: {
        color: theme.palette.primary.dark
    }
}))

const Programming = _ => {

    const classes = useStyles();
    const [repoList, setRepoList] = useState([]);
    const [uniqLang, setUniqLang] = useState([]);
    const [langColors, setLangColors] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [repoInclude, setRepoInclude] = useState([]);
    const [repoSort, setRepoSort] = useState('pushed')

    const handleSearch = e => {
        setSearchValue(e.target.value.toLowerCase())
    }

    const initLists = _ => {
        if (repoList.length === 0) {
            getGenAPI().then(repos => {
                setRepoList(repos);
                setRepoInclude(repos);
                let uniqLangs = getUniqLang(repos);
                let colorDict = assignColors(uniqLangs);
                setUniqLang(uniqLangs);
                setLangColors(colorDict);
            })
        }
    }

    const changeFilter = toInclude => {

        if (toInclude.length === 0) {
            setRepoInclude(repoList);
            return;
        }

        let filteredRepos = [];

        for (let lang of toInclude) {
            filteredRepos = filteredRepos.concat(handleIncludeRepos(lang));
        }

        filteredRepos = [...new Set(filteredRepos)]

        filteredRepos.sort((a, b) => (b['created'] - a['created']));

        setRepoInclude(filteredRepos)

    }

    const changeSort = e => {
        setRepoSort(e.target.value)
    }

    const handleIncludeRepos = query => {
        // Returns a list of repositories that include the string
        return repoList.filter((repo) => {
            return (RegExp('\\b' + query.toLowerCase() + '\\b').test(repo.language.toString().toLowerCase())
                || RegExp('\\b' + query.toLowerCase() + '\\b').test(repo.name.toLowerCase()));
            // || (repo.description != null && RegExp('\\b' + query.toLowerCase() + '\\b').test(repo.description.toLowerCase())));
        })
    }

    const getFilteredRepos = _ => {
        // Returns a list of repositories that include the string
        if (repoInclude != null && repoInclude.length > 0) {
            return repoInclude.filter((repo) => {
                return (repo.language.toString().toLowerCase().includes(searchValue.toLowerCase())
                    || repo.name.toLowerCase().includes(searchValue.toLowerCase())
                    || (repo.description != null && repo.description.toLowerCase().includes(searchValue.toLowerCase())))
            }).sort((a, b) => b[repoSort] - a[repoSort])
        } else {
            return [];
        }
    }

    useEffect(initLists, []);

    let filteredRepos = getFilteredRepos()

    return (
        <section className={classes.surface} id="programming">
            <h1 className={classes.header}>My Projects</h1>
            {uniqLang.length === 0 || repoList.length === 0 ? null :
                <div>
                    <TimelineFilter langList={uniqLang} langColors={langColors} searchValue={searchValue} handleSearch={handleSearch} handleFilter={changeFilter} sortValue={repoSort} handleSort={changeSort} />
                    <Timeline repoList={filteredRepos} langColors={langColors} />
                </div>
            }
            <Paper elevation={0} className={classes.paper}>
                For more information, you can check my full Github account <a href="https://github.com/lucashzhang" target="_blank" rel="noopener noreferrer" className={classes.link}>here</a>
            </Paper>
        </section>
    )
}

export default Programming;