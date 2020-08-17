import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Iframe from 'react-iframe'
import '../../css/FunPage/FunPageBand.css'

export interface Prop {
}

export interface State {
}

class FunPageBand extends Component<Prop, State> {

    render = () => {
        return <div className="lucas-section funpage-band">
            <h3 className="lucas-section-title">Music</h3>
            <div className="lucas-section" id="funpage-marching-band">
                <Card className="column-golden-larger lucas-content">
                    <CardContent>
                        <Iframe url="https://www.youtube.com/embed/sfxo1x1pp-o"
                            id="funpage-bandvideo"
                            className="funpage-videos"
                            display="block"
                            position="relative" />
                    </CardContent>
                </Card>
                <Card className="column-golden-smaller lucas-content">
                    <CardContent>
                        <h3>Marching Band</h3>
                        <p>
                            During all four years of high school, I spent a substantial amount of time rehearsing as the lead synthesizer player in the Panther Creek Marching Band.
                            We would perform at school football games and compete in various local competitions, even having the chance to compete in the Grand Nationals competition at the Lucas Oil Stadium in Indianapolis. 
                            By the end of my senior year, we were considered to be the best Marching Band in the state for that season.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="lucas-section" id="funpage-indoor-percussion">
                <Card className="column-golden-smaller lucas-content">
                    <CardContent>
                        <h3>Indoor Percussion</h3>
                        <p>
                            After the Marching Band season ends, my section shifts it's attention to the indoor percussion season. 
                            We would also compete in multiple local AIA and regional WGI competitions.
                            Throughout my high school years, we had placed first in finals four consecutive times.
                        </p>
                    </CardContent>
                </Card>
                <Card className="column-golden-larger lucas-content">
                    <CardContent>
                        <Iframe url="https://www.youtube.com/embed/9AV8F2RKN5k"
                            id="funpage-bandvideo"
                            className="funpage-videos"
                            display="block"
                            position="relative" />
                    </CardContent>
                </Card>
            </div>
        </div>
    }
}

export default FunPageBand;