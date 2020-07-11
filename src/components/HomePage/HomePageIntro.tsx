import React, { Component } from 'react';
import { Card, CardContent, Tooltip, Fab } from '@material-ui/core';
import { Link } from "react-router-dom";
import { FaLaptopCode, FaSmileBeam } from 'react-icons/fa';
import '../../css/HomePage/HomePageIntro.css';

export interface Prop {
}

export interface State {
}

class HomePageIntro extends Component<Prop, State> {

    render = () => {
        return <div className="homepage-section homepage-section-body" id="introductions">
            <div className="homepage-introduction">
                <h3 className="lucas-section-title">Welcome to My Page!</h3>
                <Card className="lucas-content">
                    <CardContent>
                        <p>
                            Hello, my name is Lucas Zhang, and thank you for coming to my personal website!
                            This page is a compilation of all of my projects, both in programming and in other fields.
                            It uses the Github API to update itself, so it should always hold some of my most recent works.
                            I hope you enjoy your time here!
                        </p>
                    </CardContent>
                </Card>
            </div>
            <h3 className="luacs-content lucas-subtitle">Navigating my site</h3>
            <div className="homepage-nav-group">
                <Card className="lucas-content homepage-nav column-half">
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

                <Card className="lucas-content homepage-nav column-half">
                    <Tooltip title="To the Design Page">
                        <Fab color="secondary" component={Link} to="/fun">
                            <FaSmileBeam></FaSmileBeam>
                        </Fab>
                    </Tooltip>
                    <CardContent>
                        <h3>Fun Stuff</h3>
                        <p>
                            I do a lot of things in my free time!
                            This page includes many examples of the interesting and fun activities that I've done.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    }
}

export default HomePageIntro;