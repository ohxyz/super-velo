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

        this.setX2();
        this.setY2();

        this.backgroundColor = util.generateRandomColor();
    }

    setX2() {

        this.x2 = this.x + this.width;
    }

    setY2() {

        this.y2 = this.y + this.height;
    }

    get center() {

        let x = parseInt( this.x + this.width / 2 );
        let y = parseInt( this.y + this.height / 2 );

        return { x, y };
    }

    draw( context ) {

        context.fillStyle = this.backgroundColor;
        context.fillRect( this.x, this.y, this.width, this.height );
    }

}

module.exports = {

    Layer
};