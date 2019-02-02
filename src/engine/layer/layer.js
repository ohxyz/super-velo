/**
 * Layer module
 */
import { generateHexColor } from '../util/util.js';

class Layer {
    
    constructor( { id, x, y, zIndex, width, height } ) {

        this.id = id;
        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.width = width;
        this.height = height;

        this._hexColor = generateHexColor();
    }

    draw( context ) {

        context.fillStyle = this._hexColor;
        context.fillRect( this.x, this.y, this.width, this.height );
    }

}


export {

    Layer,
    ImageLayer
};