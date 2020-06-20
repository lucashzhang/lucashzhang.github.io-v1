import React, { Component } from 'react';
import { RepoInfo } from '../utilities/handleAPI';
import { getDevIcon } from '../utilities/generalUtil';
import { IconContext } from 'react-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WebpageSnap from './WebpageSnap'
import 'react-vertical-timeline-component/style.min.css';
import '../css/Timeline.css'

export interface Prop {
    repos: RepoInfo[]
    langColors: { [index: string]: any; }
}

export interface State {

}

class Timeline extends Component<Prop, State> {

    render() {
        return (
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <VerticalTimeline layout={'1-column'}>
                    {this.props.repos.map((repo: RepoInfo) => {

                        const LangIcon: any = getDevIcon(repo.language, repo.description);

                        return <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fffff', color: '#efefef' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${this.props.langColors[repo.language]}` }}
                            date={`Created: ${repo.created}`}
                            dateClassName="TimelineDate"
                            icon={<LangIcon />}
                            iconStyle={{ background: `${this.props.langColors[repo.language]}`, color: '#efefef' }}
                            key={repo.id}
                        >
                            <div className="TimelineBody">
                                <WebpageSnap url={repo.homepage}/>
                                <h3>{repo.name}</h3>
                                <h4>Primary Language: {repo.language}</h4>
                                <p>{repo.description}</p>
                            </div>
                        </VerticalTimelineElement>
                    })}
                </VerticalTimeline>
            </IconContext.Provider>
        );
    }
}

export default Timeline;