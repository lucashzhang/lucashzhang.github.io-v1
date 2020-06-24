import React, { Component } from 'react';

export interface Prop {
}

export interface State {
}

class HomePageAbout extends Component<Prop, State> {

    render = () => {
        return <div className="homepage-section" id="about">
            <h3 className="homepage-sectiontitle">About Me</h3>
        </div>
    }
}

export default HomePageAbout;