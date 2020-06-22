import React, { Component } from 'react';
import { Tooltip, Fab } from '@material-ui/core';
import { FaGithub, FaLink } from 'react-icons/fa'
import '../css/TimelineButtons.css'

export interface Prop {
    color: string
    url: string
    website: string
}

export interface State {
}

class TimelineButtons extends Component<Prop, State> {

    render = () => {
        let website: string = ""
        if (this.props.website != null && !this.props.website.includes('raw.githubusercontent.com')) {
            website = this.props.website;
        }
        return <div className="timeline-button-container">
            <Tooltip title="Github Repository">
                <Fab color="primary" href={this.props.url} target="repoGithub">
                    <FaGithub></FaGithub>
                </Fab>
            </Tooltip>
            {this.props.website.length > 0 ? <Tooltip title="Website Link">
                <Fab color="primary" href={website} target="repoWebpage">
                    <FaLink></FaLink>
                </Fab>
            </Tooltip> : null}
        </div>
    }
}

export default TimelineButtons;