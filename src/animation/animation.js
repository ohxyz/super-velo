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

    runOne( { id, startOnlyOnce } ) {

        if ( this.currentAnimationId !== '' 
                && id !== this.currentAnimationId 
                && this.currentAnimation.isStarted ) {

            this.currentAnimation.stop();
        }

        this.run( { id, startOnlyOnce } );
    }

    runOnlyFinish( id ) {

        if ( this.currentAnimation !== '' && id !== this.currentAnimationId ) {

            if ( this.currentAnimation.isStarted ) {

                this.currentAnimation.stop();
            }
        }

        if ( this.currentAnimation.isStarted ) {

            return;
        }
        else {

            this.run( { id: id, startOnlyOnce: false } );
        }
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

    constructor( { canvasElement, width, height, sprites } ) {

        super();
        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.spritesMeta = sprites;

        this.addAnimations();
    }

    addAnimationsByAction( actionName, shouldRepeat = true, speed = 50, range ) {

        let defaultAnimationSettings = {

            canvasElement: this.canvasElement,
            width: this.width,
            height: this.height,
            repeat: shouldRepeat,
            speed: speed
        };

        let leftSettings = Object.assign( { 
            
            spriteImage: this.spritesMeta[ actionName ].image,
            spriteMatrix: this.spritesMeta[ actionName ].matrix,
            spriteRange: this.spritesMeta[ actionName ].range

        }, defaultAnimationSettings );

        this.add( actionName + '-left', new Animation( leftSettings ) );

        let rightSettings = Object.assign( { 
            
            spriteImage: this.spritesMeta[ actionName ].image,
            spriteMatrix: this.spritesMeta[ actionName ].matrix,
            spriteRange: this.spritesMeta[ actionName ].range,
            flip: true,

        }, defaultAnimationSettings );

        this.add( actionName + '-right', new Animation( rightSettings ) );
    }

    addAnimations() {

        this.addAnimationsByAction( 'walk', true );
        this.addAnimationsByAction( 'idle', true, 70 );
        this.addAnimationsByAction( 'attack', false, 40 );
        this.addAnimationsByAction( 'jump-start', false, 50, [ 0, 7 ] );
        this.addAnimationsByAction( 'jump-end', false, 50, [ 0, 7 ] );

    }

    attack( direction ) {

        if ( direction === LEFT ) {

            this.runOnlyFinish( 'attack-left' );
        }
        else if ( direction === RIGHT ) {

            this.runOnlyFinish( 'attack-right' );
        }

    }

    act( name, direction ) {

        if ( direction === LEFT ) {

            this.runOne( { id: name + '-left', startOnlyOnce: true } );
        }
        else if ( direction === RIGHT ) {

            this.runOne( { id: name + '-right', startOnlyOnce: true } );
        }

    }

    walk( direction ) {

        return this.act( 'walk', direction );
    }

    idle( direction ) {

        return this.act( 'idle', direction );
    }

    jumpStart( direction ) {

        return this.act( 'jump-start', direction );
    }

    jumpEnd( direction ) {

        return this.act( 'jump-end', direction );
    }
}

class Animation {

    constructor( { canvasElement, 
                   width, 
                   height, 
                   spriteImage, 
                   spriteMatrix,
                   spriteRange,
                   speed,
                   repeat,
                   flip } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.countOfSpriteItemsX = spriteMatrix[ 0 ];
        this.countOfSpriteItemsY = spriteMatrix[ 1 ];
        this.animationSpeed = typeof speed !== 'number' ? 50 : speed;
        this.shouldFlipSprite = flip === undefined ? false : flip;
        this.shouldRepeat = repeat === undefined ? true : repeat;

        if ( spriteRange === undefined ) {

            this.startIndexOfSpriteItem = 0;
            this.endIndexOfSpriteItem = this.countOfSpriteItemsX * this.countOfSpriteItemsY - 1;
        }
        else {

            this.startIndexOfSpriteItem = spriteRange[ 0 ];
            this.endIndexOfSpriteItem = spriteRange[ 1 ];
        }

        this.countOfFrames = ( this.endIndexOfSpriteItem - this.startIndexOfSpriteItem ) + 1;
        this.duration = this.countOfFrames * this.animationSpeed;
        this.animationTimer = 0;
        this.canvasElement.width = this.width;
        this.canvasElement.height = this.height;
        this.canvasContext = this.canvasElement.getContext( '2d' );

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
                this.isStarted = false;
            }
            else {

                frameCount = 0;
            }

            this.draw( xSeq, ySeq );

        }, this.animationSpeed );
    }
}

