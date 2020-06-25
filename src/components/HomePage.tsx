import React, { Component } from 'react';
import HomePageIntro from './HomePageIntro';
import HomePageAbout from './HomePageAbout';
import '../css/HomePage.css';

export interface Prop {
    buttonClick: Function
}

export interface State {
}

class DesignPage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page">
            <div className="homepage-home homepage-section">
                <h3 className="homepage-big-text">Hello, I'm Lucas Zhang</h3>
            </div>
            <HomePageIntro></HomePageIntro>
            <hr className="homepage-divider"/>
            <HomePageAbout></HomePageAbout>
        </div>
    }
}

export default DesignPage;