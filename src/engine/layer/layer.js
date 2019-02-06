/**
 * Layer module
 */

const util = require( '../util/util.js' );

class Layer {
    
    constructor( { x = 0, y = 0, zIndex = 0, width, height } ) {

        this.x = x;
        this.y = y;
        this.zIndex = zIndex;
        this.width = width;
        this.height = height;

        this.x2 = this.x + width;
        this.y2 = this.y + height;

        this._hexColor = util.generateRandomColor();
    }

    get center() {

        let x = parseInt( this.x + this.width / 2 );
        let y = parseInt( this.y + this.height / 2 );

        return { x, y };
    }

    draw( context ) {

        context.fillStyle = this._hexColor;
        context.fillRect( this.x, this.y, this.width, this.height );
    }

}

module.exports = {

    Layer
};