import React, { Component } from 'react';
import HomePageIntro from './HomePageIntro';
import HomePageAbout from './HomePageAbout';
import HomePageContact from './HomePageContact';
import Logo from '../assets/Logo20.png';
import '../css/HomePage.css';

export interface Prop {
    buttonClick: Function
}

export interface State {
}

class DesignPage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page">
            {/* <div className="homepage-home homepage-section">
                <h3 className="homepage-big-text">Hi, I'm Lucas Zhang</h3>
            </div> */}
            <img className="homepage-home homepage-section" id="homepage-logo" src={Logo} alt="Hi, I'm Lucas Zhang"></img>
            <HomePageIntro></HomePageIntro>
            <hr className="homepage-divider"/>
            <HomePageAbout></HomePageAbout>
            <hr className="homepage-divider"/>
            <HomePageContact></HomePageContact>
            
        </div>
    }
}

export default DesignPage;