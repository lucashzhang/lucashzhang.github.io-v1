import React, { Component } from 'react';
import { Card, CardContent, Tooltip, Fab } from '@material-ui/core';
import { Link } from "react-router-dom";
import { FaLaptopCode, FaPalette } from 'react-icons/fa';
import PersonalPortrait from '../assets/Headshot1.jpg';
import '../css/HomePageIntro.css';

export interface Prop {
}

export interface State {
}

class HomePageIntro extends Component<Prop, State> {

    render = () => {
        return <div className="homepage-section" id="introductions">
            <div className="homepage-half">
                <Card className="homepage-content" id="portrait">
                    <CardContent>
                        <img src={PersonalPortrait} alt="A Portrait of Me" />
                    </CardContent>
                </Card>
            </div>
            <div className="homepage-half">
                <div className="homepage-introduction">
                    <h3 className="homepage-content homepage-subtitle">Introductions</h3>
                    <Card className="homepage-content">
                        <CardContent>
                            <p>
                                Hello, my name is Lucas Zhang, and welcome to my personal website!
                                This page is a compilation of all of my projects, both in programming and in other fields.
                                It uses the Github API to update itself, so it should always hold some of my most recent works.
                                I hope you enjoy your time here!
                </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="homepage-nav-group">
                    <h3 className="homepage-content homepage-subtitle">Navigating my site</h3>
                    <Card className="homepage-content homepage-nav">
                        <Tooltip title="To the Programming Page">
                            <Fab color="primary" component={Link} to="/programming">
                                <FaLaptopCode></FaLaptopCode>
                            </Fab>
                        </Tooltip>
                        <CardContent>
                            <h3>Programming</h3>
                            <p>
                                This is the page where you'll find most of my programming projects
                                along with links to the repositories and project sites.
                </p>
                        </CardContent>
                    </Card>
                    <Card className="homepage-content homepage-nav">
                        <Tooltip title="To the Design Page">
                            <Fab color="secondary" component={Link} to="/design">
                                <FaPalette></FaPalette>
                            </Fab>
                        </Tooltip>
                        <CardContent>
                            <h3>Design</h3>
                            <p>
                                This is page is still a work in progress. It's even questionable whether this
                                page will be solely reserved for design.
                </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    }
}

export default HomePageIntro;