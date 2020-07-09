import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { FaHardHat } from 'react-icons/fa';
import '../../css/FunPage/FunPage.css'

export interface Prop {
}

export interface State {
}

class FunPage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page fun-page">
            <Card className="fun-page-section">
                <CardContent>
                    <p><span><FaHardHat></FaHardHat></span>   Sorry, this page is still under construction Please check again later!</p>
                </CardContent>
            </Card>
        </div>
    }
}

export default FunPage;