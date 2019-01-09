class Animation {

    constructor( { canvasElement, 
                   width, 
                   height, 
                   spriteImage, 
                   spriteMatrix,
                   spriteRange,
                   speed,
                   repeat,
                   flip,
                   multiple,
                   keepAlive } ) {

        this.canvasElement = canvasElement;
        this.width = width;
        this.height = height;
        this.countOfSpriteItemsX = spriteMatrix[ 0 ];
        this.countOfSpriteItemsY = spriteMatrix[ 1 ];
        this.animationSpeed = typeof speed !== 'number' ? 50 : speed;
        this.shouldFlipSprite = flip === undefined ? false : flip;
        this.shouldRepeat = repeat === undefined ? true : repeat;
        this.shouldAllowMultiple = multiple === undefined ? false: multiple;
        this.shouldKeepAlive = keepAlive === undefined ? false : keepAlive;

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

    start( onFinish ) {

        if ( this.isStarted ) {

            if ( this.shouldAllowMultiple === false ) {

                return;
            }
            else {

                throw new Error( 
                    `[Velo] Animation already started. Source: ${this.spriteImage.src}\n` 
                );
            }
        }

        this.animate( onFinish );
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

    /**
     *
     * @param {function} onFinish - Get called every animation cycle finishes
     */
    animate( onFinish = () => {} ) {

        this.canvasContext.setTransform( 1, 0, 0, 1, 0, 0 );

        if ( this.shouldFlipSprite === true ) {

            this.canvasContext.translate( this.width, 0 );
            this.canvasContext.scale( -1, 1 );
        }
        else {

            this.canvasContext.translate( 0, 0 );
            this.canvasContext.scale( 1, 1 );
        }

        let xSeq = 0; 
        let ySeq = 0;

        if ( this.startIndexOfSpriteItem === this.endIndexOfSpriteItem ) {

            this.canvasContext.clearRect( 0, 0, this.width, this.height );

            xSeq = this.startIndexOfSpriteItem % this.countOfSpriteItemsX;
            ySeq = Math.floor( this.endIndexOfSpriteItem / this.countOfSpriteItemsX );
            
            // This may not necessarily render when Image object is not loaded yet.
            this.draw( xSeq, ySeq );
            onFinish();

            return;
        }

        let frameCount = this.startIndexOfSpriteItem;
        let endOfFrames = this.endIndexOfSpriteItem;

        const drawFrame = () => {

            this.canvasContext.clearRect( 0, 0, this.width, this.height );
            
            xSeq = frameCount % this.countOfSpriteItemsX;
            ySeq = Math.floor( frameCount / this.countOfSpriteItemsX );

            if ( frameCount < endOfFrames ) {

                frameCount ++;
            }
            else if ( this.shouldRepeat === false ) {

                clearInterval( this.animationTimer );

                this.isStarted = this.shouldKeepAlive;

                onFinish();
            }
            else {

                frameCount = 0;
                onFinish();
            }

            this.draw( xSeq, ySeq );
        }

        this.animationTimer = setInterval( drawFrame, this.animationSpeed );
    }
}


class AnimationContainer {

    constructor( { id, priority, animation } ) {

        this.id = id;
        this.priority = priority;
        this.animation = animation;
    }

    stopAnimation() {

        this.animation.stop();
    }
}

/**
 * 
 * Example of animations collection
 *
 *   this.animations = [
 *
 *       { id: 'anime-1', priority: 2, animation: walkAnimation },
 *       { id: 'anime-2', priority: 0, animation: jumpAnimation }
 *   ]
 */
class AnimationManager {

    constructor() {

        this.animationContainers = [];
        this.currentAnimationContainer = null;

        this.currentAnimationId = '';
        this.currentAnimation = null;
    }

    add( id, animation, priority = 1 ) {

        for ( let container of this.animationContainers ) {

            if ( container.id === id ) {

                throw new Error( `[Velo] Animation already exists. Animation ID: ${id}\n` );
            }
        }

        let container = new AnimationContainer( {

            id: id, 
            animation: animation, 
            priority: priority 
        } );

        this.animationContainers.push( container );
    }

    get( id ) {

        for ( let container of this.animationContainers ) {

            if ( container.id === id ) {

                return container;
            }
        }

        return null;
    }

    /**
     * Run only one animation in the animations array. When the method is called, the current 
     * running animation must be stopped, unless it has a higher priority.
     *
     */
    runOne( id, onFinish ) {

        let newAnimationContainer = this.get( id );

        if ( newAnimationContainer === null ) {

            throw new Error( `[Velo] Animation (ID: ${id}) not found.\n` );
        }

        if ( this.currentAnimationContainer !== null 
                && this.currentAnimationContainer.id !== id 
                && this.currentAnimationContainer.animation.isStarted ) {
    
            // When new animation container's priority is lower(>) than the current one.
            if ( newAnimationContainer.priority > this.currentAnimationContainer.priority ) {

                return;
            }
            else {

                this.currentAnimationContainer.animation.stop();
            }
        }

        newAnimationContainer.animation.start( onFinish );
        this.currentAnimationContainer = newAnimationContainer;

        return newAnimationContainer;
    }

    /**
     * Stop current animation and start a new animation.
     * When the method called, it will do nothing if the current animation is still running.
     *
     */
    runOnlyFinish( id, onFinish ) {

        let newAnimationContainer = this.get( id );

        if ( newAnimationContainer === null ) {

            throw new Error( `[Velo] Animation (ID: ${id}) not found.\n` );
        }

        if ( this.currentAnimationContainer !== null 
                && this.currentAnimationContainer.id !== id ) {

            if ( this.currentAnimationContainer.animation.isStarted
                    && newAnimationContainer.priority < this.currentAnimationContainer.priority ) {

                this.currentAnimationContainer.animation.stop();
            }
        }

        if ( this.currentAnimationContainer.animation.isStarted ) {

            return this.currentAnimationContainer;
        }
        else {

            newAnimationContainer.animation.start( onFinish );
            this.currentAnimationContainer = newAnimationContainer;

            return this.currentAnimationContainer;
        }
    }

    runAll() {

        for ( let container of this.animationContainers ) {

            container.animation.start();

        }
    }

    stopAll() {

        for ( let container of this.animationContainers ) {

            try {

                container.animation.stop();
            }
            catch( error ) {

                console.log( error );
            }
        }
    }
}


