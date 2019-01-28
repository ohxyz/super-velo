/**
 * Layer module
 */

class Layer {
    
    constructor( { id, x, y, zIndex, width, height } ) {

        this.id = id;
        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.width = width;
        this.height = height;
    }

    draw( context ) {


    }
}


export {

    Layer,
    ImageLayer
};