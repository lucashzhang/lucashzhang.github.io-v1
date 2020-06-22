import React, { Component } from 'react';
import { Card, CardContent, Button } from '@material-ui/core'
import PropTypes from 'prop-types';
import '../css/HomePage.css'
import PersonalPortrait from '../assets/PersonalPortrait.jpg'

export interface Prop {
    buttonClick: Function
}

export interface State {
}

class DesignPage extends Component<Prop, State> {

    static contextTypes = {
        swipeableViews: PropTypes.object.isRequired,
    };

    resize = () => {
        this.context.swipeableViews.slideUpdateHeight();
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    render = () => {
        return <div className="Page">
            <div className="BigText"><h3>Welcome To My Page</h3></div>
            <div className="Introductions">
                <div className="Half">
                    <Card className="Card" id="Image">
                        <CardContent><img id="PersonalPortrait" src={PersonalPortrait} alt=""/></CardContent>
                    </Card>
                </div>
                <div className="Half">
                    <Card className="Card" id="Intro">
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
                        <Button className="NavButton" variant="contained" color="secondary" onClick={() => this.props.buttonClick(1)}>
                            Go To Programming
                        </Button>
                        <Button className="NavButton" variant="contained" color="secondary" onClick={() => this.props.buttonClick(2)}>
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