import { Animation } from './animation.js';
import { AnimationQueue } from './animation-queue.js';

/**
 * 
 * Example of animations collection
 *
 *   this.animations = [
 *
 *       { id: 'anime-1', priority: 2, animation: walkAnimation },
 *       { id: 'anime-2', priority: 0, animation: jumpAnimation }
 *   ]
 *
 * @Todo Remove `id` from AnimationQueue. Apply `id` in AnimationManager
 */
class AnimationManager {

    constructor() {

        this.animationQueues = [];
        this.currentAnimationQueue = null;
    }

    addQueue( queue ) {

        if ( queue instanceof AnimationQueue ) {

            this.animationQueues.push( queue );
            return;
        }

        throw new Error( '[Velo] Argument must be an instance of AnimationQueue.\n' );
    }

    addQueueByAnimation( { qid, priority = 1, animation } ) {

        for ( let queue of this.animationQueues ) {

            if ( queue.id === qid ) {

                throw new Error( `[Velo] Animation already exists. Animation ID: ${qid}\n` );
            }
        }

        let queue = new AnimationQueue( {

            id: qid, 
            animations: [ animation ], 
            priority: priority 
        } );

        this.animationQueues.push( queue );
    }

    getQueue( qid ) {

        for ( let queue of this.animationQueues ) {

            if ( queue.id === qid ) {

                return queue;
            }
        }

        return null;
    }

    /**
     * Run only one queue of animations. When the method is called, the current 
     * running animations of a queue must all be stopped, unless the queue has a higher priority.
     *
     */
    runQueue( qid ) {

        let newAnimationQueue = this.getQueue( qid );

        if ( newAnimationQueue === null ) {

            throw new Error( `[Velo] Animation (ID: ${qid}) not found.\n` );
        }

        if ( this.currentAnimationQueue !== null ) {

            // When new animation queue's priority is lower(>) than the current one.
            if ( newAnimationQueue.priority > this.currentAnimationQueue.priority ) {

                return;
            }

            this.currentAnimationQueue.stop();
        }
        
        this.currentAnimationQueue = newAnimationQueue;
        return this.currentAnimationQueue.run();

       
    }

    stopQueue( qid ) {

        let queue = this.getQueue( qid );

        if ( queue === null ) {

            throw new Error( `[Velo] Animation (ID: ${qid}) not found.\n` );
        }

        queue.stop();
    }

    stopAllQueues() {

        this.animationQueues.forEach( queue => { 

            queue.stop();

        } );
    }
}

export {

    AnimationManager,
}