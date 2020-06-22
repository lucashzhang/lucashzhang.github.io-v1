import React, { Component } from 'react';
import '../css/WebpageSnap.css'
import placeholder from '../assets/Code-Placeholder.png'

interface Prop {
    url: string
}

interface State {

}

class WebpageSnap extends Component<Prop, State> {

    render() {

        const apiURL: string = 'https://api.apiflash.com/v1/urltoimage?access_key=81b584f60fb2444db5beb297443320db&ttl=2592000&url=';
        const userContent: string = "raw.githubusercontent.com/";
        const snapImgURL: string = apiURL + this.props.url;

        if (this.props.url != null && this.props.url.length > 0) {
            if (this.props.url.includes(userContent)) {
                return <img src={this.props.url} alt="" />;
            }
            return <img src={snapImgURL} alt="" />
        } else {
            return <img src={placeholder} alt="" />;
        }
    }
}

export default WebpageSnap;
