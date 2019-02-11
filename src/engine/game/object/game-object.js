import EventEmitter from 'events';
import Util from '../../util/util.js';
import { NONE, UP, RIGHT, DOWN, LEFT } from '../../constants.js';
import { LayerUtil } from '../../layer/util.js';

class GameObject {

    constructor( { id = Util.generateRandomString(), layer } ) {

        this.id = id;
        this.layer = layer;
        this.isBounceStarted = false;
        this.eventEmitter = new EventEmitter();
    }

    on( eventName, listener ) {

        this.eventEmitter.on( eventName, listener );
    }

    emit( eventName ) {

        this.eventEmitter.emit( eventName );
    }

    isOverlapping( gameObject, tolerance = { width: 0, height: 0 } ) {

        return LayerUtil.doOverlap( this.layer, gameObject.layer, tolerance );
    }

    moveTo( x, y ) {

        this.layer.x = x;
        this.layer.y = y;
        this.layer.setX2();
        this.layer.setY2();
    }


    // Todo: make the game object move around
    moveAround() {


    }

    stay( duration = 1000 ) {

        return new Promise( ( resolve, reject ) => { 

            setTimeout( () => resolve(), duration );

        } );
    }

    //Todo: call moveTo method instead of setX2 or setY2()
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

        this.layer.setX2();
        this.layer.setY2();

        return new Promise( ( resolve, reject ) => { 

            resolve();
        } )
    }

    bounce( direction = NONE, { startHeight = 50,
                                stepSizeX = 5,
                                stepSizeY = 5,
                                duration = 500, 
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

        let total = parseInt( ( duration / 2 ) / interval, 10 );
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