class Animation {

    constructor( { layer = null, interval = 50 } = {} ) {

        this.layer = layer;
        this.animationInterval = interval;

        this.timerId = 0;
        this.isStarted = false;
    }

    // Todo: create basic functionality for simple animation
    animate() {

    }

    start() {
 
        if ( this.isStarted ) {

            return;
        }

        this.isStarted = true;
        this.animate();
    }

    stop() {

        clearInterval( this.timerId );
        clearTimeout( this.timerId );

        this.isStarted = false;
    }
}

class SpriteAnimation extends Animation { 

    constructor( { repeat = true, spriteImage = null, flip = false, ...object } ) {

        super( object );

        this.sliceCount = 0;
        this.imageSlices = [];
        this.shouldRepeat = repeat;
        this.spriteImage = spriteImage;
        this.shouldFlipImage = flip;

        this.getImageSlices();
    }

    getImageSlices() {

        if ( this.spriteImage === null ||
                this.spriteImage instanceof SpriteImage === false ) {

            throw new Error( '[Velo] SpriteImage not found or not valid.\n' );
        }

        this.imageSlices = this.spriteImage.slice();
    }

    animate() {

        this.layer.shouldFlipImage = this.shouldFlipImage;

        this.timerId = setInterval( () => {

            this.layer.imageSlice = this.imageSlices[ this.sliceCount ];

            if ( this.sliceCount < this.imageSlices.length - 1 ) {

                this.sliceCount ++;
            }
            else {

                if ( this.shouldRepeat === false ) {

                    this.stop();
                }
                else {

                    this.sliceCount = 0;
                }
            }

        }, this.animationInterval );
    }

}

class AnimationQueue {

    constructor( { id, priority = 0, animations = [] } ) {

        this.id = id;
        this.priority = priority;
        this.animations = animations;
        this.isAllStarted = false;
    }

    add( ...animations ) {

        animations.forEach( animation => { 

            this.animations.push( animation );
        } )
    }

    startAll() {

        this.animations.forEach( animation => {

            animation.start();
        } );

        this.isAllStarted = false;
    }

    stopAll() {

        this.animations.forEach( animation => {

            animation.stop();
        } );

        this.isAllStarted = false;
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

        this.animationQueue = [];
        this.currentAnimationQueue = null;

        this.currentAnimationId = '';
        this.currentAnimation = null;
    }

    addQueue( { id, priority = 1, animation } ) {

        for ( let queue of this.animationQueue ) {

            if ( queue.id === id ) {

                throw new Error( `[Velo] Animation already exists. Animation ID: ${id}\n` );
            }
        }

        let queue = new AnimationQueue( {

            id: id, 
            animations: [ animation ], 
            priority: priority 
        } );

        this.animationQueue.push( queue );
    }

    get( id ) {

        for ( let queue of this.animationQueue ) {

            if ( queue.id === id ) {

                return queue;
            }
        }

        return null;
    }

    /**
     * Run only one animation in the animations array. When the method is called, the current 
     * running animation must be stopped, unless it has a higher priority.
     *
     */
    runOne( { id, onFinish = () => {} } ) {

        let newAnimationQueue = this.get( id );

        if ( newAnimationQueue === null ) {

            throw new Error( `[Velo] Animation (ID: ${id}) not found.\n` );
        }

        if ( this.currentAnimationQueue !== null 
                && this.currentAnimationQueue.id !== id 
                && this.currentAnimationQueue.isAllStarted ) {
    
            // When new animation queue's priority is lower(>) than the current one.
            if ( newAnimationQueue.priority > this.currentAnimationQueue.priority ) {

                return;
            }
            else {

                this.currentAnimationQueue.stopAll();
            }
        }

        newAnimationQueue.animation.start( onFinish );
        this.currentAnimationQueue = newAnimationQueue;

        return newAnimationQueue;
    }

    /**
     * Stop current animation and start a new animation.
     * When the method called, it will do nothing if the current animation is still running.
     *
     */
    runOnlyFinish( id, onFinish ) {

        let newAnimationQueue = this.get( id );

        if ( newAnimationQueue === null ) {

            throw new Error( `[Velo] Animation (ID: ${id}) not found.\n` );
        }

        if ( this.currentAnimationQueue !== null 
                && this.currentAnimationQueue.id !== id ) {

            if ( this.currentAnimationQueue.isAllStarted
                    && newAnimationQueue.priority < this.currentAnimationQueue.priority ) {

                this.currentAnimationQueue.stopAll();
            }
        }

        if ( this.currentAnimationQueue.isAllStarted ) {

            return this.currentAnimationQueue;
        }
        else {

            newAnimationQueue.startAll( onFinish );
            this.currentAnimationQueue = newAnimationQueue;

            return this.currentAnimationQueue;
        }
    }
}