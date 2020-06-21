import React, { Component } from 'react';
import { Card, CardContent, TextField, Checkbox, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import '../css/TimelineFilter.css'

export interface Prop {
    langList: string[]
    langColors: { [index: string]: any; }
    handleChange: Function;
}

export interface State {

}

class TimelineFilter extends Component<Prop, State> {

    onFieldChange = (e: any) => {

        this.props.handleChange(e.target.value)
    }

    render = () => {

        return (
            <Card className="Filter">
                <CardContent>
                    <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" onChange={this.onFieldChange} />
                    <FormControl fullWidth component="fieldset">
                        <FormGroup row>
                            {this.props.langList.map((lang: string) => (
                                <FormControlLabel control={<Checkbox name={lang} />} label={lang} />
                            ))}
                        </FormGroup>
                    </FormControl>
                </CardContent>
            </Card>
        );
    }
}

export default TimelineFilter;