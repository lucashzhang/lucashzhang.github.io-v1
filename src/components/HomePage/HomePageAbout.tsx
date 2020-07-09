import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import PersonalPortrait from '../../assets/Headshot1.jpg';
import '../../css/HomePage/HomePageAbout.css';

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
                    <Card className="homepage-content">
                        <CardContent>
                            <img id="portrait" src={PersonalPortrait} alt="A Portrait of Me!" />
                        </CardContent>
                    </Card>
                </div>
                <div className="homepage-half">
                    <div className="homepage-about">
                        <Card className="homepage-content">
                            <CardContent>
                                <h3>College</h3>
                                <p>
                                    Currently, I'm a Computer Science Major at the University of North Carolina Chapel Hill.
                                    I'm also pursuing two minors in Statistics and Studio Art, respectively.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="homepage-content">
                            <CardContent>
                                <h3>Interests</h3>
                                <p>
                                    Some of my favorite things to do involve Digital Media.
                                    I really enjoy working in programs like Adobe Illustrator and Photoshop.
                                    I'm particularly like Web Development since it represents a nexus of my interests.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="homepage-content">
                            <CardContent>
                                <h3>Activities</h3>
                                <p>
                                    Right now, I'm the design executive chair/design director of the Carolina Analytics and Data Science Club and Carolina Data Challenge hackathon.
                                    These organizations helped me meet many peers and friends who share my interests.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            {/* <div className="homepage-section-body" id="about-resume">
                <h3 className="homepage-content homepage-subtitle">My Resume</h3>
                <Button variant="contained" color="secondary" href='../assets/Resume_Lucas.pdf'>
                    See my resume
                </Button>
            </div> */}
        </div>
    }
}

export default HomePageAbout;