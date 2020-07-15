import React, { Component } from 'react';
import { RepoInfo } from '../../utilities/handleAPI';
import { getDevIcon } from '../../utilities/generalUtil';
import { IconContext } from 'react-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { isBrowser } from 'react-device-detect';
import WebpageSnap from './WebpageSnap'
import TimelineButtons from './TimelineButtons'
import 'react-vertical-timeline-component/style.min.css';
import '../../css/TimelinePage/Timeline.css'

export interface Prop {
    repos: RepoInfo[]
    langColors: { [index: string]: any; }
}

export interface State {

}

class Timeline extends Component<Prop, State> {

    render = () => {
        let repos = this.props.repos;
        return (
            repos.length > 0 ? <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <VerticalTimeline layout={'1-column'} animate = {isBrowser}>
                    {this.props.repos.map((repo: RepoInfo) => {

                        const LangIcon: any = getDevIcon(repo.language, repo.description);

                        return <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fffff', color: '#efefef' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${this.props.langColors[repo.language]}` }}
                            date={`Created: ${repo.created}`}
                            dateClassName="timeline-date"
                            icon={<LangIcon />}
                            iconStyle={{ background: `${this.props.langColors[repo.language]}`, color: '#efefef' }}
                            key={repo.id}
                        >
                            <div className="timeline-body">
                                <div className="timeline-half">
                                    <WebpageSnap url={repo.homepage} />
                                </div>
                                <div className="timeline-text timeline-half">
                                    <div>
                                        <h3>{repo.name}</h3>
                                        <h4>Primary Language: {repo.language}</h4>
                                        <p>{repo.description}</p>
                                    </div>
                                    <TimelineButtons
                                        color={this.props.langColors[repo.language]}
                                        github={repo.url}
                                        website={repo.homepage}>                                        
                                    </TimelineButtons>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    })}
                </VerticalTimeline>
            </IconContext.Provider> : null
        );
    }
}

export default Timeline;