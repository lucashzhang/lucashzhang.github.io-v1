import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Iframe from 'react-iframe'
import '../../css/FunPage/FunPageBand.css'

export interface Prop {
}

export interface State {
    imageList: any[]
}

class FunPageDesign extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            imageList: []
        }
    }

    render = () => {
        return <div className="lucas-section funpage-band">
            <h3 className="lucas-section-title">Design</h3>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet optio ab asperiores aliquam fuga molestiae magnam fugit voluptatem, saepe, iure voluptas cum vel ea voluptatum soluta hic laborum odio.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="lucas-section" id="funpage-indoor-percussion">
                <Card className="column-golden-smaller lucas-content">
                    <CardContent>
                        <h3>Indoor Percussion</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet optio ab asperiores aliquam fuga molestiae magnam fugit voluptatem, saepe, iure voluptas cum vel ea voluptatum soluta hic laborum odio.</p>
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

export default FunPageDesign;