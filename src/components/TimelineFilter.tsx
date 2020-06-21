import React, { Component } from 'react';
import { Grid, Card, CardContent, TextField, Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import '../css/TimelineFilter.css'

export interface Prop {
    langList: string[]
    langColors: { [index: string]: any; }
    handleFieldChange: Function;
    handleIncludeChange: Function;
}

export interface State {
    checkBox: { [index: string]: boolean; }
}

class TimelineFilter extends Component<Prop, State> {

    constructor(prop: Prop) {
        super(prop);
        this.state = {
            checkBox: {}
        }
    }

    componentDidMount = () => {

        let checkBoxes: { [index: string]: any; } = {};
        this.props.langList.forEach((lang: string) => {
            checkBoxes[lang] = true
        });

        this.setState({
            checkBox: checkBoxes
        })

    }

    onCheckChange = (e: any) => {

        let checkBoxes = this.state.checkBox;
        checkBoxes[e.target.name] = e.target.checked;
        this.setState({
            checkBox: checkBoxes
        })

        let toRemove = Object.keys(checkBoxes);
        toRemove = toRemove.filter((include: string) => {
            return !checkBoxes[include]
        })
        this.props.handleIncludeChange(toRemove);
    }

    onFieldChange = (e: any) => {

        this.props.handleFieldChange(e.target.value)
    }

    render = () => {

        return (
            <Card className="Filter">
                <CardContent>
                    <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" onChange={this.onFieldChange} />
                    <FormControl fullWidth component="fieldset">
                        {Object.keys(this.state.checkBox).length > 0 ? <Grid container alignItems="center" justify="center">
                            <FormGroup row>
                                {this.props.langList.map((lang: string) => (
                                    <Grid item key = {lang} >
                                        <FormControlLabel labelPlacement="top" control={
                                            <Checkbox style ={{
                                                color: this.props.langColors[lang],
                                              }} checked = {this.state.checkBox[lang]} 
                                              name={lang}
                                              onChange={this.onCheckChange}
                                            />
                                        } label={lang} />
                                    </Grid>
                                ))}
                            </FormGroup>
                        </Grid> : null}
                    </FormControl>

                </CardContent>
            </Card>
        );
    }
}

export default TimelineFilter;