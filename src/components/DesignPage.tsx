import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface Prop {
}

export interface State {
}

class DesignPage extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
    }

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
        return <div>Design</div>
    }
}

export default DesignPage;