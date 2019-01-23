import { UP, RIGHT, DOWN, LEFT } from '../../constants.js';

class GameObject {

    constructor( layer ) {

        this.layer = layer;
    }

    moveTo( x, y ) {

        this.layer.x = x;
        this.layer.y = y;
    }

    move( direction, step = 10 ) {

        if ( direction === UP ) {

            this.layer.y -= step;
        }
        else if ( direction === RIGHT ) {

            this.layer.x += step;
        }
        else if ( direction === DOWN ) {

            this.layer.y += step;
        }
        else if ( direction === LEFT ) {

            this.layer.x -= step;
        }

        return new Promise( ( resolve, reject ) => { 

            resolve();
        } )
    }
}

export {

    GameObject
};