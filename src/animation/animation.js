class AnimationManager {

    constructor() {

        this.animations = {};
        this.currentAnimationId = '';
        this.currentAnimation = null;
    }

    add( id, animation ) {

        for ( let existingId in this.animations ) {

            if ( existingId === id ) {

                throw new Error( `[Velo] Animation already exists. Animation ID: ${id}\n` );
            }
        }

        this.animations[ id ] = animation;
    }

    get( id ) {

        if ( this.animations[ id ] === undefined ) {

            throw new Error( `[Velo] Animation (ID: ${id}) not found.\n` );
        }

        return this.animations[ id ];
    }

    run( { id, startOnlyOnce } ) {

        this.currentAnimation = this.get( id );
        this.currentAnimationId = id;        
        this.currentAnimation.start( startOnlyOnce );
    }

    runOnlyOne( { id, startOnlyOnce } ) {

        if ( this.currentAnimationId !== '' 
                && id !== this.currentAnimationId 
                && this.currentAnimation.isStarted ) {

            this.currentAnimation.stop();
        }

        this.run( { id, startOnlyOnce } );
    }

    runAll() {

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


class CharacterAnimationManager extends AnimationManager {

    constructor( { canvasElement, width, height, idle, walk, attack, jump } ) {

        super();
        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.idle = idle;
        this.walk = walk;
        this.attack = attack;
        this.jump = jump;
    }

    idle() {

    }

    walk() {


    }
}

class Animation {

    constructor( { canvasElement, 
                   width, 
                   height, 
                   spriteImage, 
                   spriteMatrix,
                   spriteStart,
                   spriteEnd,
                   speed,
                   repeat,
                   flip } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.countOfSpriteItemsX = spriteMatrix[ 0 ];
        this.countOfSpriteItemsY = spriteMatrix[ 1 ];
        this.animationSpeed = typeof speed !== 'number' ? 60 : speed;
        this.shouldFlipSprite = flip === undefined ? false : flip;
        this.shouldRepeat = repeat === undefined ? true : repeat;
        this.startIndexOfSpriteItem = typeof spriteStart !== 'number' ? 0 : spriteStart;
        this.endIndexOfSpriteItem = typeof spriteStart !== 'number' 
                                  ? this.countOfSpriteItemsX * this.countOfSpriteItemsY - 1
                                  : spriteEnd;

        this.animationTimer = -1;
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasContext = this.canvasElement.getContext( '2d' );

        // this.spriteImage = new Image();
        // this.spriteImage.src = spriteSource;
        this.spriteImage = spriteImage;
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

    start( shouldOnlyStartOnce = false ) {

        if ( this.isStarted ) {

            if ( shouldOnlyStartOnce === true ) {

                return;
            }
            else {

                throw new Error( 
                    `[Velo] Animation already started. Source: ${this.spriteImage.src}\n` 
                );
            }
        }

        this.animate();
        this.isStarted = true;
    }

    stop() {

        if ( !this.isStarted ) {

            throw new Error( 
                `[Velo] Animation not started yet. Source: ${this.spriteImage.src}\n` 
            );
        }

        clearInterval( this.animationTimer );
        this.isStarted = false;
    }

    animate() {

        let xSeq = 0; 
        let ySeq = 0;
        let frameCount = this.startIndexOfSpriteItem;
        let endOfFrames = this.endIndexOfSpriteItem;

        this.canvasContext.setTransform( 1, 0, 0, 1, 0, 0 );

        if ( this.shouldFlipSprite === true ) {

            this.canvasContext.translate( this.width, 0 );
            this.canvasContext.scale( -1, 1 );
        }
        else {

            this.canvasContext.translate( 0, 0 );
            this.canvasContext.scale( 1, 1 );
        }

        this.animationTimer = setInterval( () => {

            this.canvasContext.clearRect( 
                0, 0, this.width, this.height
            );
            
            xSeq = frameCount % this.countOfSpriteItemsX;
            ySeq = Math.floor( frameCount / this.countOfSpriteItemsX );

            if ( frameCount < endOfFrames ) {

                frameCount ++;
            }
            else if ( this.shouldRepeat === false ) {

                clearInterval( this.animationTimer );
            }
            else {

                frameCount = 0;
            }

            this.draw( xSeq, ySeq );

        }, this.animationSpeed );
    }
}

