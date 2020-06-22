import React, { Component } from 'react';
import '../css/App.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";

export interface Prop {
    location: any
}

export interface State {
}

class NavBar extends Component<Prop> {

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {

        return (
            <AppBar position="sticky" color="default">
                <Tabs value={this.props.location.pathname} textColor="secondary" indicatorColor="secondary" variant="fullWidth">
                    <Tab label="Home" value="/" component={Link} to="/" />
                    <Tab label="Programming" value="/programming" component={Link} to="/programming" />
                    <Tab label="Design" value="/design" component={Link} to="/design" />
                </Tabs>
            </AppBar>
        )
    }
}

export default NavBar;