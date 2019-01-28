
class AnimationQueue {

    constructor( { id, priority = 0, animations = [] } ) {

        this.id = id;
        this.priority = priority;
        this.animations = animations;
        this.areAllStarted = false;
    }

    add( ...animations ) {

        animations.forEach( animation => { 

            this.animations.push( animation );
        } )
    }

    run() {

        this.animations.forEach( animation => {

            animation.start();
        } );

        this.areAllStarted = true;
    }

    runOneByOne( index ) {

        let total = this.animations.length;

        this.animations[ index ].start().then( () => {

            let nextIndex = index + 1;

            if ( nextIndex < total ) {

                this.runOneByOne( nextIndex );
            }
        } );
    }

    runSequence() {

        this.runOneByOne( 0 );
    }

    stop() {

        this.animations.forEach( animation => {

            animation.stop();
        } );

        this.areAllStarted = false;
    }
}

export {

    AnimationQueue
};