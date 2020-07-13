import portfolio_app from '../assets/designs/portfolio_app.mp4';
import CADSXMEJO from '../assets/designs/CADSXMEJO.png';
import CDCPoster from '../assets/designs/CDCPoster1.png';

export enum DesignType {
    VIDEO,
    IMAGE
}

export enum Orientation {
    LANDSCAPE,
    PORTRAIT
}

export interface Designs {
    name: string,
    type: DesignType,
    orientation: Orientation
    file: any
}

export function getDesigns() {

    let designList: Designs[] = [
        { name: "Portfolio", type: DesignType.VIDEO, orientation: Orientation.LANDSCAPE, file: portfolio_app },
        { name: "CADS Data Journalism", type: DesignType.IMAGE, orientation: Orientation.LANDSCAPE, file: CADSXMEJO },
        { name: "CDC Poster", type: DesignType.IMAGE, orientation: Orientation.PORTRAIT, file: CDCPoster}
    ];

    return designList;
}