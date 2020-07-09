import React, { Component } from 'react';
import { Tooltip, Fab } from '@material-ui/core';
import { FaGithubAlt, FaLink } from 'react-icons/fa';
import '../../css/TimelinePage/TimelineButtons.css';

export interface Prop {
    color: string
    github: string
    website: string
}

export interface State {
}

class TimelineButtons extends Component<Prop, State> {

    render = () => {
        let website: string = ""
        if (this.props.website != null && !this.props.website.includes('githubusercontent.com')) {
            website = this.props.website;
        }
        return <div className="timeline-button-container">
            <Tooltip title="Github Repository">
                <Fab color="primary" href={this.props.github} target="repoGithub">
                    <FaGithubAlt></FaGithubAlt>
                </Fab>
            </Tooltip>
            {website.length > 0 ? <Tooltip title="Website Link">
                <Fab color="primary" href={website} target="repoWebpage">
                    <FaLink></FaLink>
                </Fab>
            </Tooltip> : null}
        </div>
    }
}

export default TimelineButtons;