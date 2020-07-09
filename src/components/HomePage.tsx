import React, { Component } from 'react';
import HomePageIntro from './HomePageIntro';
import HomePageAbout from './HomePageAbout';
import HomePageContact from './HomePageContact';
import LogoHorz from '../assets/Logo20.png';
import LogoVert from '../assets/Logo20_vert.png'
import '../css/HomePage.css';

export interface Prop {
    buttonClick: Function
}

export interface State {
}

class HomePage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page home-page">
            {/* <div className="homepage-home homepage-section">
                <h3 className="homepage-big-text">Hi, I'm Lucas Zhang</h3>
            </div> */}
            <div className="homepage-home">
                <img className="homepage-section" id="homepage-logo-horz" src={LogoHorz} alt="Hi, I'm Lucas Zhang"></img>
                <img className="homepage-section" id="homepage-logo-vert" src={LogoVert} alt="Hi, I'm Lucas Zhang"></img>
            </div>
            <HomePageIntro></HomePageIntro>
            <hr className="homepage-divider" />
            <HomePageAbout></HomePageAbout>
            <hr className="homepage-divider" />
            <HomePageContact></HomePageContact>
        </div>
    }
}

export default HomePage;