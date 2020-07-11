import React, { Component } from 'react';
import FunPageBand from './FunPageBand';
import FunPageDesign from './FunPageDesign'
import '../../css/FunPage/FunPage.css'

export interface Prop {
}

export interface State {
}

class FunPage extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-page funpage">
            <FunPageBand></FunPageBand>
            <FunPageDesign></FunPageDesign>
        </div>
    }
}

export default FunPage;