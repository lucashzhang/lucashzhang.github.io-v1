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
            <div className="big-text homepage-section"><h3>Welcome To My Page!</h3></div>
            <HomePageIntro></HomePageIntro>
            <hr className="homepage-divider" />
            <HomePageAbout></HomePageAbout>
        </div>
    }
}

export default DesignPage;