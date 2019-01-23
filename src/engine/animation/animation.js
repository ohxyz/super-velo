

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


export {

    Animation
}