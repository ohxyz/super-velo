
class AnimationQueue {

    constructor( { id, priority = 1, animations = [] } ) {

        this.id = id;
        this.priority = priority;
        this.animations = animations;
        this.isStarted = false;
    }

    add( ...animations ) {

        animations.forEach( animation => { 

            this.animations.push( animation );
        } )
    }

    runTogether() {

        this.animations.forEach( animation => {

            animation.start();
        } );

        this.isStarted = true;
    }

    runOneByOne( index ) {

        let total = this.animations.length;

        this.animations[ index ].start().then( () => {

            let nextIndex = index + 1;

            if ( nextIndex < total ) {

                this.runOneByOne( nextIndex );
            }
            else {

                this.isStarted = false;
            }

        } );
    }

    run() {

        this.runOneByOne( 0 );
        this.isStarted = true;
    }

    stop() {

        this.animations.forEach( animation => {

            animation.stop();
        } );

        this.isStarted = false;
    }
}

export {

    AnimationQueue
};