
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