/**
 * Character
 */

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

class Character {

    constructor( { canvasElement, width, height, x, y, animationManager, facing } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.animationManager = animationManager;
        this.facing = typeof facing !== 'number' ? RIGHT : facing

        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasElement.style.position = 'absolute';
        this.canvasElement.style.left = x + 'px';
        this.canvasElement.style.top = y + 'px';

        this.canvasContext = this.canvasElement.getContext( '2d' );
        this.stepSize = 5;

        this.idle();
    }

    move( direction, step ) {

        let left = parseInt( this.canvasElement.style.left, 10 );
        let top = parseInt( this.canvasElement.style.top, 10 );

        if ( direction === UP ) {

            this.canvasElement.style.top = top - step + 'px';
        }
        else if ( direction === RIGHT ) {

            this.canvasElement.style.left = left + step + 'px';
        }
        else if ( direction === DOWN ) {

            this.canvasElement.style.top = top + step + 'px';
        }
        else if ( direction === LEFT ) {

            this.canvasElement.style.left = left - step + 'px';
        }
        else {

            throw new Error( '[Velo] Left, right, up or down only.\n' );
        }
    }

    idle() {

        if ( this.facing === LEFT ) {

            this.idleLeft();
        }
        else if ( this.facing === RIGHT ) {

            this.idleRight();
        }
    }

    idleLeft( animationId = 'idle-left' ) {

        this.animationManager.startOnlyOne( { id: animationId, onlyOnce: true } );
    }

    idleRight( animationId = 'idle-right' ) {

        this.animationManager.startOnlyOne( { id: animationId, onlyOnce: true } );
    }

    walkLeft( animationId = 'walk-left' ) {

        this.animationManager.startOnlyOne( { id: animationId, onlyOnce: true } );
        this.move( LEFT, this.stepSize );
        this.facing = LEFT;
    }

    walkRight( animationId = 'walk-right' ) {

        this.animationManager.startOnlyOne( { id: animationId, onlyOnce: true } );
        this.move( RIGHT, this.stepSize );
        this.facing = RIGHT;
    }

    jump( startHeight = 50 ) {

        let count = 1;
        let maxCount = 20;
        let jumpTimer = 0;

        jumpTimer = setInterval( () => {

            if ( count < maxCount ) {

                let top = parseInt( this.canvasElement.style.top, 10 );
                let distance = parseInt( startHeight / count, 10 );

                this.canvasElement.style.top = top - distance + 'px';
                count ++;
            }
            else {
                console.log( this.canvasElement.style.top );
                clearInterval( jumpTimer );

                jumpTimer = setInterval( () => {

                    count --;

                    if ( count > 0 ) {

                        let top = parseInt( this.canvasElement.style.top );
                        let distance = parseInt( startHeight / count );

                        this.canvasElement.style.top = top + distance + 'px';
                    }
                    else {

                        clearInterval( jumpTimer );
                    } 

                }, 10 );
            }

        }, 10 );

    }
}
