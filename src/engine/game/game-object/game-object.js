import { UP, RIGHT, DOWN, LEFT } from '../../constants.js';
import { bounce } from '../../util/easing';

class GameObject {

    constructor( layer ) {

        this.layer = layer;
    }

    moveTo( x, y ) {

        this.layer.x = x;
        this.layer.y = y;
    }

    bounce( { startHeight = 50,
              period = 500, 
              interval = 20, 
              x = 0 , 
              y = 0 } = {} ) {

        let total = parseInt( ( period / 2 ) / interval, 10 );
        let count = 1;

        let timerId = setInterval( () => { 

            if ( count < total ) {

                let eachHeight = parseInt( startHeight / count );
                this.layer.y -= eachHeight;

                console.log( count, eachHeight );
                
                count ++;
            }
            else { 

                clearInterval( timerId );

                timerId = setInterval( () => {

                    count --;

                    if ( count > 0 ) {

                        let eachHeight = parseInt( startHeight / count );
                        this.layer.y += eachHeight;
                        console.log( count, eachHeight );
                        
                    }

                }, interval );
            }

        }, interval )

    }

    move( direction, step = 5 ) {

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