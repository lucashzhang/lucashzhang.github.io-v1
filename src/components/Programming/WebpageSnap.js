import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import placeholder from '../../assets/Code-Placeholder.png'

const useStyles = makeStyles((theme) => ({
    visual: {
        objectFit: 'contain',
        width: '100%',
        height: 'auto',
        maxHeight: '320px',
        borderRadius: '0.25rem',
        backgroundColor: 'darkgray',
    }
}))

const WebpageSnap = props => {

    const classes = useStyles();

    const handleUserContent = () => {
        if (props.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return <img className={classes.visual} src={props.url} alt="Screenshot from project" />;
        } else if (props.url.includes('.mp4')) {
            return <video className={classes.visual} src={props.url} controls></video>
        } else {
            return <img className={classes.visual} src={placeholder} alt="Placeholder screenshot of timeline code" />;
        }
    }

    const apiURL = 'https://api.apiflash.com/v1/urltoimage?access_key=81b584f60fb2444db5beb297443320db&delay=1&ttl=2592000&url=';
    const userContent = "githubusercontent.com/";
    const snapImgURL = apiURL + props.url;

    if (props.url != null && props.url.length > 0) {
        if (props.url.includes(userContent)) {
            return handleUserContent();
        }
        return <img className={classes.visual} src={snapImgURL} alt="Screenshot of Project Webpage" />
    } else {
        return <img className={classes.visual} src={placeholder} alt="Placeholder screenshot of timeline code" />;
    }
}

export default WebpageSnap;