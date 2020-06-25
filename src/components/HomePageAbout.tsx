import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import PersonalPortrait from '../assets/Headshot1.jpg';
import '../css/HomePageAbout.css';

export interface Prop {
}

export interface State {
}

class HomePageAbout extends Component<Prop, State> {

    render = () => {
        return <div className="homepage-section" id="about">
            <h3 className="homepage-section-title">About Me</h3>
            <div className="homepage-section-body">
                <div className="homepage-half">
                    <Card className="homepage-content" id="portrait">
                        <CardContent>
                            <img src={PersonalPortrait} alt="A Portrait of Me!" />
                        </CardContent>
                    </Card>
                </div>
                <div className="homepage-half">
                    <div className="homepage-about">
                        <h3 className="homepage-content homepage-subtitle">College</h3>
                        <Card className="homepage-content">
                            <CardContent>
                                <p>
                                    Currently, I'm a Computer Science Major at the University of North Carolina Chapel Hill.
                                    I'm also pursuing two minors in Statistics and Studio Art, respectively.
                                </p>
                            </CardContent>
                        </Card>
                        <h3 className="homepage-content homepage-subtitle">Interests</h3>
                        <Card className="homepage-content">
                            <CardContent>
                                <p>
                                    Some of my favorite things to do involve Digital Media.
                                    I really enjoy working in programs like Adobe Illustrator and Photoshop.
                                    I'm particularly like Web Development since it represents a nexus of my interests.
                                </p>
                            </CardContent>
                        </Card>
                        <h3 className="homepage-content homepage-subtitle">Clubs</h3>
                        <Card className="homepage-content">
                            <CardContent>
                                <p>
                                    Right now, I'm the design executive chair/director of the Carolina Analytics and Data Science Club and Carolina Data Challenge.
                                    These organizations helped me meet many peers who share my interests.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default HomePageAbout;