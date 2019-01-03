class AnimationManager {

    constructor() {

        this.animations = {};
    }

    add( id, animation ) {

        for ( let existingId in this.animations ) {

            if ( existingId === id ) {

                throw new Error( `Animation already exists. Animation ID: ${id}\n` );
            }
        }

        this.animations[ id ] = animation;
    }

    get( id ) {

        return this.animations[ id ];
    }

    startAll() {

        for ( let id in this.animations ) {

            this.animations[ id ].start();
        }

    }

    stopAll() {

        for ( let id in this.animations ) {

            this.animations[ id ].stop();
        }
    }
}

class Animation {

    constructor( { canvasElement, width, height, spriteSource, spriteMatrix } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.countOfSpriteItemsX = spriteMatrix[ 0 ];
        this.countOfSpriteItemsY = spriteMatrix[ 1 ];

        this.animationTimer = -1;
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasContext = this.canvasElement.getContext( '2d' );

        this.spriteImage = new Image();
        this.spriteImage.src = spriteSource;
        this.isStarted = false;
    }

    draw( xSeq = 0, ySeq = 0 ) {

        this.canvasContext.drawImage(

            this.spriteImage, 
            this.width * xSeq, 
            this.height * ySeq , 
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        );
    }

    start() {

        if ( this.isStarted ) {

            throw new Error( `Animation already started. Source: ${this.spriteImage.src}\n` );
        }

        this.animate();
        this.isStarted = true;
    }

    stop() {

        if ( !this.isStarted ) {

            throw new Error( `Animation not started yet. Source: ${this.spriteImage.src}\n` );
        }

        clearInterval( this.animationTimer );
        this.isStarted = false;
    }

    animate() {

        let xSeq = 0; 
        let ySeq = 0;
        let frameCount = 0;
        let frameSpeed = 50;
        let totalFrames = this.countOfSpriteItemsX * this.countOfSpriteItemsY - 1;

        this.canvasContext.setTransform( 1, 0, 0, 1, 0, 0 );

        this.animationTimer = setInterval( () => {

            this.canvasContext.clearRect( 
                0, 0, this.width, this.height
            );
            
            xSeq = frameCount % this.countOfSpriteItemsX;
            ySeq = Math.floor( frameCount / this.countOfSpriteItemsX );

            if ( frameCount < totalFrames ) {

                frameCount ++;
            }
            else {

                frameCount = 0;
            }

            this.draw( xSeq, ySeq );

        }, frameSpeed );
    }
}

let animationManager = new AnimationManager();