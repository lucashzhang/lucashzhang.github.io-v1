import React, { Component } from 'react';
import { Card, CardContent, TextField } from '@material-ui/core';
import '../css/TimelineFilter.css'

export interface Prop {
    langList: string[]
    langColors: { [index: string]: any; }
    handleChange: Function;
}

export interface State {

}

class TimelineFilter extends Component<Prop, State> {

    onChange = (e: any) => {
        const target = e.target;
        const value = target.value;

        this.props.handleChange(value)
    }

    render() {
        return (
            <Card className="Filter">
                <CardContent>
                    <TextField id="outlined-basic" label="Search" variant="outlined" onChange={this.onChange}/>
                </CardContent>
            </Card>
        );
    }
}

export default TimelineFilter;