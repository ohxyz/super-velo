
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

        const executor = resolve => {

            this.animations[ index ].start().then( () => {

                let nextIndex = index + 1;

                if ( nextIndex < total ) {

                    this.runOneByOne( nextIndex );
                }
                else {

                    this.isStarted = false;
                    resolve();
                }

            } );
        }

        return new Promise( executor );
    }

    run() {

        this.isStarted = true;

        return this.runOneByOne( 0 );
        
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