import React, { Component } from 'react';
import { RepoInfo, getGenAPI } from '../utilities/handleAPI';
import { assignColors } from '../utilities/handleColors';
import { getUniqLang } from '../utilities/generalUtil';
import Timeline from './Timeline';
import TimelineFilter from './TimelineFilter';
import '../css/TimelinePage.css'

export interface Prop {
}

export interface State {
    // Keeps a state of both the complete repo list and the one filtered by the checkboxes
    // This allows for less repeated processesing
    repoList: RepoInfo[]
    includedRepo: RepoInfo[]
    langs: string[]
    langColors: { [index: string]: any; }
    filterString: string
}

class TimelinePage extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            repoList: [],
            includedRepo: [],
            langs: [],
            langColors: {},
            filterString: "",
        }
    }

    componentDidMount = async () => {

        let repoList = await getGenAPI();

        if (repoList != null) {
            let newLangs = getUniqLang(repoList);
            let newColors = assignColors(newLangs);
            newLangs = newLangs.sort()
            this.setState({
                repoList: repoList,
                includedRepo: repoList,
                langs: newLangs,
                langColors: newColors,
            });
        }
    }

    handleFieldChange = (query: string) => {
        this.setState({
            filterString: query.toLowerCase()
        })
    }

    handleIncludeChange = (toRemove: string[]) => {
        let tempRepos: RepoInfo[] = this.state.repoList;
        // For each language to remove, filter out the repos that include the language
        for (let lang of toRemove) {
            tempRepos = this.handleRemoveRepos(tempRepos, lang);
        }

        this.setState({
            includedRepo: tempRepos
        })
    }

    getFilteredRepos = (repoList: RepoInfo[], filterString: string) => {
        // Returns a list of repositories that include the string
        return repoList.filter((repo: RepoInfo) => {
            return (repo.language.toLowerCase().includes(filterString.toLowerCase())
                || repo.name.toLowerCase().includes(filterString.toLowerCase())
                || (repo.description != null && repo.description.toLowerCase().includes(filterString.toLowerCase())))
        })
    }

    handleRemoveRepos = (repoList: RepoInfo[], filterString: string) => {
        // Returns a list of repositories that don't include the string
        return repoList.filter((repo: RepoInfo) => {
            return !(repo.language.toLowerCase().includes(filterString.toLowerCase())
                || repo.name.toLowerCase().includes(filterString.toLowerCase())
                || (repo.description != null && repo.description.toLowerCase().includes(` ${filterString.toLowerCase()} `)))
        })
    }

    render = () => {
        let filteredRepos = this.getFilteredRepos(this.state.includedRepo, this.state.filterString);

        return <div className="lucas-page timeline-page">
            {this.state.langs.length > 0 && this.state.langColors ?
                <TimelineFilter langList={this.state.langs} langColors={this.state.langColors} handleFieldChange={this.handleFieldChange} handleIncludeChange={this.handleIncludeChange}></TimelineFilter>
                : null}
            <Timeline repos={filteredRepos} langColors={this.state.langColors} />
        </div>
    }
}

export default TimelinePage;