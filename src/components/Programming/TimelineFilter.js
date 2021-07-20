import React, { useState, useEffect } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { Paper, TextField, Checkbox, Grid, FormControl, FormControlLabel, Select, MenuItem, InputLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    surface: {
        paddingLeft: 'calc((100% - 1170px) / 2)',
        paddingRight: 'calc((100% - 1170px) / 2)',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '2.5%',
            paddingRight: '2.5%',
        },
    },
    paper: {
        padding: '1rem',
    },
    checks: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center'
    },
    checkLabels: {
        width: '60px'
    }

}))

const TimelineFilter = props => {

    const classes = useStyles();
    const [checkBoxes, setCheckBoxes] = useState({});

    const onCheckChange = (e) => {

        let checked = checkBoxes;
        checked[e.target.name] = e.target.checked;

        setCheckBoxes(prevState => (
            { ...prevState, [e.target.name]: e.target.checked }
        ));

        // gives list of which check boxes are unchecked
        let toInclude = Object.keys(checked).filter((include) => {
            return checkBoxes[include]
        })

        props.handleFilter(toInclude)
    }

    const initCheckBoxes = _ => {
        if (Object.keys(checkBoxes).length === 0) {
            let initBoxes = {};
            props.langList.forEach(lang => initBoxes[lang] = false);
            setCheckBoxes(initBoxes);
        }
    }

    useEffect(initCheckBoxes, [])

    return (
        <section className={classes.surface} id="about">
            <Paper elevation={0} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={9}>
                        <TextField fullWidth variant='outlined' label='Search' value={props.searchValue} onChange={props.handleSearch}></TextField>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <FormControl fullWidth variant="outlined" >
                            <InputLabel id="sort-label">Sort By</InputLabel>
                            <Select value={props.sortValue} onChange={props.handleSort} labelId="sort-label" label="Sort By">
                                <MenuItem value="pushed">Date Updated</MenuItem>
                                <MenuItem value="created">Date Created</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>
                <FormControl fullWidth component="fieldset">
                    <Grid container alignItems="center" justify="space-evenly" className={classes.checks}>
                        {props.langList.map((lang) => {
                            return <Grid item key={lang} >
                                <FormControlLabel labelPlacement="top" className={classes.checkLabels} control={
                                    <Checkbox
                                        style={{
                                            color: props.langColors[lang],
                                        }}
                                        checked={checkBoxes[lang] == null ? false : checkBoxes[lang]}
                                        color="default"
                                        name={lang}
                                        onChange={onCheckChange}
                                    />
                                } label={lang} />
                            </Grid>
                        })}
                    </Grid>
                </FormControl>
            </Paper>
        </section>
    )
}

export default TimelineFilter;