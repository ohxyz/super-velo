class Animation {

    constructor( { layer = null, 
                   interval = 50, 
                   repeat = true,
                   spriteImage = null } = {} ) {

        this.layer = layer;
        this.animationInterval = interval;
        this.shouldRepeat = repeat;
        this.spriteImage = spriteImage;

        this.sliceCount = 0;
        this.timerId = 0;
        this.isStarted = false;
        this.imageSlices = [];

        this.getImageSlices();
    }

    getImageSlices() {

        if ( this.spriteImage === null ||
                this.spriteImage instanceof SpriteImage === false ) {

            throw new Error( '[Velo] SpriteImage not found or not valid.\n' );
        }

        this.imageSlices = this.spriteImage.slice();
    }

    animate( onFinish = () => {} ) {

        this.timerId = setInterval( () => {

            this.layer.imageSlice = this.imageSlices[ this.sliceCount ];

            if ( this.sliceCount < this.imageSlices.length - 1 ) {

                this.sliceCount ++;
            }
            else {

                onFinish();

                if ( this.shouldRepeat === false ) {

                    this.stop();
                }
                else {

                    this.sliceCount = 0;
                }
            }

        }, this.animationInterval );
    }

    start( shouldFlipImage = false, onFinish = () => {} ) {

        this.layer.shouldFlipImage = shouldFlipImage;
 
        if ( this.isStarted ) {

            return;
        }

        this.animate( onFinish );
        this.isStarted = true;
    }

    stop() {

        clearInterval( this.timerId );
        this.isStarted = false;
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
    runOne( { id, flip = false, onFinish = () => {} } ) {

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

        newAnimationContainer.animation.start( flip, onFinish );
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