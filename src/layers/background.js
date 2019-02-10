import { BackgroundLayer } from '../engine/layer';
import backgroundImageSource from '../assets/background-dev.png';

let backgroundImage = new Image();
backgroundImage.src = backgroundImageSource;

let backgroundLayer = new BackgroundLayer( { 

    id: 'background',
    x: 0,
    y: 0,
    zIndex: 0,
    width: 960,
    height: 480,
    image: backgroundImage
} );

export {

    backgroundLayer
};