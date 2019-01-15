

class Character {

    constructor( { layer, sprites, animationManager } ) {

        this.layer = layer;
        this.animationManager = animationManager;

        this.facing = RIGHT;
        this.idle();
    }

    idle() {

        let shouldFlipImage = false;

        if ( this.facing === RIGHT ) {

            shouldFlipImage = true;
        }
        else if ( this.facing === LEFT ) {

            shouldFlipImage = false;
        }

        this.animationManager.runOne( { id: 'idle', flip: shouldFlipImage } );
    }

    walkLeft( step ) {

        this.facing = LEFT;
        this.layer.x -= step;
        this.animationManager.runOne( { id: 'walk', flip: false } );
    }
    
    walkRight( step ) {

        this.facing = RIGHT;
        this.layer.shouldFlipImage = true;
        this.layer.x += step;
        this.animationManager.runOne( { id: 'walk', flip: true } );
    }

    jumpPrepare() {

        let height = 10;
        let count = 0;
        let total = 3;

        let timerId = setInterval( () => { 

            if ( count < total ) {

                this.layer.y -= height;
                count ++;
            }
            else {

                clearInterval( timerId );
            }

        }, 1000 )
    }
}

