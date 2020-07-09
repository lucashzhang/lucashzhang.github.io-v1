import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio veniam maiores saepe sapiente omnis ex facilis optio similique aliquid vitae quas et illum, deserunt soluta totam! Aperiam, eius dignissimos!</p>
                </CardContent>
            </Card>
        </div>
    }
}

export default FunPage;