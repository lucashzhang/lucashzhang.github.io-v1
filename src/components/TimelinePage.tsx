import React, { Component } from 'react';
import { RepoInfo, getGenAPI } from '../utilities/handleAPI';
import { assignColors } from '../utilities/handleColors';
import { getUniqLang } from '../utilities/generalUtil';
import Timeline from './Timeline';
import TimelineFilter from './TimelineFilter';
import PropTypes from 'prop-types';
import '../css/TimelinePage.css'

export interface Prop {
}

export interface State {
    repos: RepoInfo[]
    langs: string[]
    langColors: { [index: string]: any; }
    filterString: string
}

class TimelinePage extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            repos: [],
            langs: [],
            langColors: {},
            filterString: ""
        }
    }

    static contextTypes = {
        swipeableViews: PropTypes.object.isRequired,
    };

    resize = () => {
        this.context.swipeableViews.slideUpdateHeight();
    }

    componentDidUpdate = () => {
        this.resize();
    }

    componentDidMount = async () => {
        window.addEventListener("resize", this.resize);

        let repoList = await getGenAPI();

        if (repoList != null) {
            let newLangs = getUniqLang(repoList);
            let newColors = assignColors(newLangs);
            this.setState({
                repos: repoList,
                langs: newLangs,
                langColors: newColors
            });
        }
    }

    handleFieldChange = (query: string) => {
        this.setState({
            filterString: query.toLowerCase()
        })
    }

    render = () => {
        let filteredRepos = this.state.repos.filter((repo: RepoInfo) => {
            return (repo.language.toLowerCase().includes(this.state.filterString)
            || repo.name.toLowerCase().includes(this.state.filterString)
            || (repo.description != null && repo.description.toLowerCase().includes(this.state.filterString)))
        })
        return <div className="Page">
            <TimelineFilter langList={this.state.langs} langColors={this.state.langColors} handleChange={this.handleFieldChange}></TimelineFilter>
            <Timeline repos={filteredRepos} langColors={this.state.langColors} />
        </div>
    }
}

export default TimelinePage;