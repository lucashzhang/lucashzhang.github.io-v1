import React, { Component } from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import '../css/HomePage.css';
import PersonalPortrait from '../assets/PersonalPortrait.jpg';

export interface Prop {
    buttonClick: Function
}

export interface State {
}

class DesignPage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page">
            <div className="big-text"><h3>Welcome To My Page!</h3></div>
            <div id="introductions">
                <div className="homepage-half">
                    <Card className="homepage-card" id="Image">
                        <CardContent>
                            <p>
                                This is a placeholder for the image that's gonna be here
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="homepage-half">
                    <Card className="homepage-card" id="Intro">
                        <CardContent>
                            <p>
                                Hello, my Name is Lucas Zhang, and welcome to my personal website!
                                This page is a compilation of all of my projects, both in programming and in other fields.
                                It uses the Github API to update itself, so it should always hold some of my most recent works.
                                I hope you enjoy your time here!
                            </p>
                        </CardContent>
                    </Card>
                    <div id="ButtonContainer">
                        <Button className="homepage-navbutton" variant="contained" color="secondary" component={Link} to="/programming">
                            Go To Programming
                        </Button>
                        <Button className="homepage-navbutton" variant="contained" color="secondary" component={Link} to="/design">
                            Go To Design
                        </Button>
                    </div>
                </div>
            </div>
            <div className="BigText"><h3>TODO-- Everything else</h3></div>

        </div>
    }
}

export default DesignPage;