import React, { Component } from 'react';
import { RepoInfo, getGenAPI } from '../../utilities/handleAPI';
import { assignColors } from '../../utilities/handleColors';
import { getUniqLang } from '../../utilities/generalUtil';
import Timeline from './Timeline';
import TimelineFilter from './TimelineFilter';
import '../../css/TimelinePage/TimelinePage.css'

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

    handleIncludeChange = (toRemove: string[], toInclude: string[]) => {

        /* 
        Time Complexity: O(n*m) + O(l) + O(n log n)
        n = # repos
        m = # checkboxes checked
        l = length of resulting list from first for loop
        */

        let tempRepos: any[] = [];

        // For each language to remove, filter out the repos that don't the language
        console.log(toInclude);
        for (let lang of toInclude) {
            tempRepos = tempRepos.concat(this.handleIncludeRepos(this.state.repoList, lang));
        }

        // Filter out any duplicates
        let filteredRepos: RepoInfo[] = tempRepos.filter((v, i) => { return i === tempRepos.lastIndexOf(v); });

        // Resort the list into the correct order
        filteredRepos.sort((a, b) => {
            if (a['created'] > b['created']) {
                return -1;
            } else {
                return 1;
            }
        });

        this.setState({
            includedRepo: filteredRepos
        })
    }

    /*
     *@deprecated
    */
    _handleIncludeChange = (toRemove: string[], toInclude: string[]) => {

        /* 
        Time Complexity: O(n * k) + O(l * m) + O(n)
        n = # repos
        m = # checkboxes checked
        l = length of result of first for loop (l is always going to smaller than n)
        k = # checkboxes unchecked (Dependent on m)

        Could be more efficient, depends on the size of l
        */

        let toFilter: any[] = [];
        // For each language to remove, filter out the repos that include the language

        // Create a list of candidates to remove
        for (let lang of toRemove) {
            toFilter = toFilter.concat(this.handleIncludeRepos(this.state.repoList, lang));
        }

        // Remove any candidates from the list that should actually be included
        for (let lang of toInclude) {
            toFilter = this.handleRemoveRepos(toFilter, lang);
        }

        // Filter out repos to remove
        let filteredRepos: RepoInfo[] = this.state.repoList.filter((repo: RepoInfo) => {
            return !toFilter.includes(repo);
        });

        this.setState({
            includedRepo: filteredRepos
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

    handleIncludeRepos = (repoList: RepoInfo[], filterString: string) => {
        // Returns a list of repositories that include the string
        return repoList.filter((repo: RepoInfo) => {
            return (RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.language.toLowerCase())
                || RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.name.toLowerCase())
                || (repo.description != null && RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.description.toLowerCase())));
        })
    }

    handleRemoveRepos = (repoList: RepoInfo[], filterString: string) => {
        // Returns a list of repositories that don't include the string
        return repoList.filter((repo: RepoInfo) => {
            return !(RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.language.toLowerCase())
                || RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.name.toLowerCase())
                || (repo.description != null && RegExp('\\b' + filterString.toLowerCase() + '\\b').test(repo.description.toLowerCase())))
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