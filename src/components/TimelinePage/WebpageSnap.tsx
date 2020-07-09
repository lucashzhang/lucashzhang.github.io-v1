import React, { Component } from 'react';
import placeholder from '../../assets/Code-Placeholder.png'
import '../../css/TimelinePage/WebpageSnap.css'

interface Prop {
    url: string
}

interface State {

}

class WebpageSnap extends Component<Prop, State> {

    handleUserContent = () => {
        if (this.props.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return <img className="timeline-visual" src={this.props.url} alt="Screenshot from project" />;
        } else if (this.props.url.includes('.mp4')) {
            return <video className="timeline-visual" src={this.props.url} controls></video>
        } else {
            return <img className="timeline-visual" src={placeholder} alt="Placeholder screenshot of timeline code" />;
        }
    }

    render() {

        const apiURL: string = 'https://api.apiflash.com/v1/urltoimage?access_key=81b584f60fb2444db5beb297443320db&ttl=2592000&url=';
        const userContent: string = "raw.githubusercontent.com/";
        const snapImgURL: string = apiURL + this.props.url;

        if (this.props.url != null && this.props.url.length > 0) {
            if (this.props.url.includes(userContent)) {
                return this.handleUserContent();
            }
            return <img className="timeline-visual" src={snapImgURL} alt="Screenshot of Project Webpage" />
        } else {
            return <img className="timeline-visual" src={placeholder} alt="Placeholder screenshot of timeline code" />;
        }
    }
}

export default WebpageSnap;
