import React, { Component } from 'react';
import { Card, CardContent, GridList, GridListTile } from '@material-ui/core';
import { Designs, DesignType, getDesigns, Orientation } from '../../utilities/handleDesigns';
import '../../css/FunPage/FunPageDesign.css'

export interface Prop {
}

export interface State {
    designList: Designs[]
}

class FunPageDesign extends Component<Prop, State> {

    constructor(props: Prop) {
        super(props);
        this.state = {
            designList: []
        }
    }

    componentDidMount = () => {
        const tempDesigns: Designs[] = getDesigns();
        this.setState({
            designList: tempDesigns
        })
    }

    handleDesignContent = (design: Designs) => {
        let numCols = design.orientation === Orientation.LANDSCAPE ? 3 : 2;
        let numRows = design.orientation === Orientation.PORTRAIT ? 3 : 2;
        if (design.type === DesignType.IMAGE) {
            return <GridListTile className="fun-design-tile" cols={numCols} rows={numRows}><img src={design.file} alt={design.name} /></GridListTile>
        } else {
            return <GridListTile className="fun-design-tile" cols={numCols} rows={numRows}><video src={design.file} controls></video></GridListTile>
        }
    }

    render = () => {
        return <div className="lucas-section funpage-design">
            <h3 className="lucas-section-title">Design</h3>
            <div className="lucas-section" id="funpage-design-grid">
                <GridList cols={5}>
                    {this.state.designList.map((design) => (
                        this.handleDesignContent(design)
                    ))}
                </GridList>
            </div>
        </div>
    }
}

export default FunPageDesign;