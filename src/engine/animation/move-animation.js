import { UP, RIGHT, DOWN, LEFT } from '../constants.js';
import { Animation } from './animation.js';

class MoveAnimation extends Animation {

    constructor( { direction = LEFT, step = 5, ...object } ) {

        super( object );

        this.direction = direction;
        this.step = step;
    }

    animate() {

        if ( this.direction === LEFT ) {

            this.layer.x -= this.step;
        }
        else if ( this.direction === RIGHT ) {

            this.layer.x += this.step;
        }

        this.isStarted = false;

        return new Promise( ( resolve, reject ) => { 

            resolve();
        } )
    }
}

export {

    MoveAnimation
}