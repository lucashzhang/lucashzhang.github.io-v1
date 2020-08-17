import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import '../../css/FunPage/FunPageDesign.css'

import portfolio_app from '../../assets/designs/portfolio_app.mp4';
import CADSXMEJO from '../../assets/designs/CADSXMEJO.png';
import CDCPoster from '../../assets/designs/CDCPackets.png';

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
                                For years, I've had an interest creating and designing things. 
                                During my senior year of high school, I attended a class where I learned and became certified to use various Adobe Creative Cloud products.
                                My chosen final project for the class was to create an app animation (shown above) that showcased all my designs up to that point.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div id="cads-poster">
                    <Card className="lucas-content">
                        <CardContent>
                            <img className="funpage-design-content" src={CADSXMEJO} alt="Digital Journalism publicity graphic"></img>
                        </CardContent>
                    </Card>
                    <Card className="lucas-content">
                        <CardContent>
                            <h3>Carolina Analytics and Data Science</h3>
                            <p>
                                As the design chair on the Carolina Analytics and Data Science executive board, I helped to create visuals for the various ventures of the other board members.
                                The design shown above was created to publicize the Data Journalism Mentorship program that the club created in partnership with UNC's Hussman School of Journalism and Media.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div id="cdc-poster">
                    <Card className="lucas-content">
                        <CardContent>
                            <img className="funpage-design-content" src={CDCPoster} alt="Carolina Data Challenge 2019 Poster"></img>
                        </CardContent>
                    </Card>
                    <Card className="lucas-content">
                        <CardContent>
                            <h3>Carolina Data Challenge</h3>
                            <p>
                                One of my first assignments as the design chair of the Carolina Analytics and Data Science club was to serve as the interim designer of the 2019 Carolina Data Challenge.
                                This year, I am offically director of design for the Data Challenge and am excited to see my works help the event come into fruition.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    }
}

export default FunPageDesign;