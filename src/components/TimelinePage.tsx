import React, { Component } from 'react';
import { RepoInfo, getGenAPI } from '../utilities/handleAPI';
import { assignColors } from '../utilities/handleColors';
import Timeline from './Timeline'
import PropTypes from 'prop-types';

export interface Prop {
}

export interface State {
    repos: RepoInfo[]
    langColors: { [index: string]: any; }
}

class TimelinePage extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            repos: [],
            langColors: {}
        }
    }

    static contextTypes = {
        swipeableViews: PropTypes.object.isRequired,
    };

    resize = () => {
        this.context.swipeableViews.slideUpdateHeight();
    }

    componentDidMount = async () => {
        window.addEventListener("resize", this.resize);

        let repoList = await getGenAPI();

        if (repoList != null) {
            let newColors = assignColors(repoList);
            this.setState({
                repos: repoList,
                langColors: newColors
            });
        }
    }

    render = () => {
        return <Timeline repos={this.state.repos} langColors={this.state.langColors} />
    }
}

export default TimelinePage;