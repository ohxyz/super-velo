import { NONE, UP, RIGHT, DOWN, LEFT } from '../../constants.js';
import { generateRandomString } from '../../util/util.js';

class GameObject {

    constructor( { id = generateRandomString(), layer } ) {

        this.id = id;
        this.layer = layer;
        this.isBounceStarted = false;
    }

    moveTo( x, y ) {

        this.layer.x = x;
        this.layer.y = y;
    }

    stay( time = 1000 ) {

        return new Promise( ( resolve, reject ) => { 

            setTimeout( () => resolve(), time );

        } );

    }

    move( direction = None, step = 5 ) {

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

    bounce( direction = NONE, { startHeight = 50,
                                stepSizeX = 5,
                                stepSizeY = 5,
                                time = 500, 
                                interval = 20 } = {} ) {

        if ( this.isBounceStarted ) {

            return;
        }

        this.isBounceStarted = true;

        let eachStepX = 0;
        let eachStepY = 0;

        if ( direction === LEFT ) {

            eachStepX = -stepSizeX;
            eachStepY = 0;
        }
        else if ( direction === RIGHT ) {

            eachStepX = stepSizeX;
            eachStepY = 0;
        }
        else if( direction === UP ) {

            eachStepX = 0;
            eachStepY = stepSizeY;
        }
        else if( direction === DOWN ) {

            eachStepX = 0;
            eachStepY = -stepSizeY;
        }

        let total = parseInt( ( time / 2 ) / interval, 10 );
        let count = 1;

        const executor = ( resolve, reject ) => {

            let timerId = setInterval( () => {

                if ( count < total ) {

                    let eachHeight = parseInt( startHeight / count );
                    this.layer.y -= ( eachHeight + eachStepY );
                    this.layer.x += eachStepX;
                    
                    count ++;
                }
                else { 

                    clearInterval( timerId );

                    timerId = setInterval( () => {

                        count --;

                        if ( count > 0 ) {

                            let eachHeight = parseInt( startHeight / count );
                            this.layer.y += ( eachHeight - eachStepY );
                            this.layer.x += eachStepX;
                            
                        }
                        else {

                            clearInterval( timerId );
                            this.isBounceStarted = false;
                            resolve();
                        }

                    }, interval );
                }

            }, interval );
        };

        return new Promise( executor );

    }

}

export {

    GameObject
};