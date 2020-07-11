import React, { Component } from 'react';
import { Tooltip, Fab } from '@material-ui/core';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../../css/HomePage/HomePageContact.css';

export interface Prop {
}

export interface State {
}

class HomepageContact extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-section" id="contact">
            <h3 className="lucas-section-title">Contact Me</h3>
            <div className="homepage-section-body homepage-contact-fabs">
                <Tooltip title="My Linkedin">
                    <Fab color="primary" href="https://www.linkedin.com/in/lucashzhang" target="_blank">
                        <FaLinkedin></FaLinkedin>
                    </Fab>
                </Tooltip>
                <Tooltip title="My Email">
                    <Fab color="primary" href="mailto:lhzhang@live.unc.edu">
                        <FaEnvelope></FaEnvelope>
                    </Fab>
                </Tooltip>
            </div>
        </div>
    }
}

export default HomepageContact;