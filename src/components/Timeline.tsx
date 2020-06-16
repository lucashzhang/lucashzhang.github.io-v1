import React, { Component } from 'react';
import { RepoInfo, getGenAPI } from '../utilities/handleAPI';
import { assignColors } from '../utilities/handleColors';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/Timeline.css'

export interface Prop {
}

export interface State {
    repos: RepoInfo[]
    langColors: { [index: string]: any; }
}

class Timeline extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            repos: [],
            langColors: {}
        }
    }

    componentDidMount = async () => {
        let repoList = await getGenAPI();

        if (repoList != null) {
            let newColors = assignColors(repoList);
            console.log(newColors)
            this.setState({
                repos: repoList,
                langColors: newColors
            });
        }
    }

    render() {
        return (
            <VerticalTimeline layout={'1-column'}>
                {this.state.repos.map((repo: RepoInfo) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#efefef' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${this.state.langColors[repo.language]}` }}
                        date={`Created: ${repo.created}`}
                        dateClassName="TimelineDate"
                        iconStyle={{ background: `${this.state.langColors[repo.language]}`, color: '#efefef' }}
                        key={repo.id}
                    >
                        <div className="TimelineBody">
                            <h3>{repo.name}</h3>
                            <h4>Primary Language: {repo.language}</h4>
                            <p>{repo.description}</p>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        );
    }
}

export default Timeline;