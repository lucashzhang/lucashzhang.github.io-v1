import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import '../../css/FunPage/FunPageDesign.css'

import portfolio_app from '../../assets/designs/portfolio_app.mp4';
import CADSXMEJO from '../../assets/designs/CADSXMEJO.png';
import CDCPoster from '../../assets/designs/CDCPoster1.png';

export interface Prop {
}

export interface State {
}

class FunPageDesign extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-section funpage-design">
            <h3 className="lucas-section-title">Design</h3>
            <div className="lucas-section" id="funpage-design-grid">
                <div id="portfolio-app">
                    <Card className="lucas-content">
                        <CardContent>
                            <video className="funpage-design-content" src={portfolio_app} controls></video>
                        </CardContent>
                    </Card>
                    <Card className="lucas-content">
                        <CardContent>
                            <h3>Portfolio App Animation</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum corrupti quo deleniti illum velit quaerat. Ea, rerum? Qui unde dolorem pariatur quidem nisi nam tenetur soluta libero doloribus doloremque!
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div id="cdc-poster">
                    <Card className="lucas-content">
                        <CardContent>
                            <img className="funpage-design-content" src={CDCPoster}></img>
                        </CardContent>
                    </Card>
                    <Card className="lucas-content">
                        <CardContent>
                            <h3>Carolina Data Challenge 2019</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum corrupti quo deleniti illum velit quaerat. Ea, rerum? Qui unde dolorem pariatur quidem nisi nam tenetur soluta libero doloribus doloremque!
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div id="cads-poster">
                    <Card className="lucas-content">
                        <CardContent>
                            <img className="funpage-design-content" src={CADSXMEJO}></img>
                        </CardContent>
                    </Card>
                    <Card className="lucas-content">
                        <CardContent>
                            <h3>Carolina Analytics and Data Science</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum corrupti quo deleniti illum velit quaerat. Ea, rerum? Qui unde dolorem pariatur quidem nisi nam tenetur soluta libero doloribus doloremque!
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    }
}

export default FunPageDesign;